import { NextFunction, Request, Response } from "express";
import { findUser} from "../../libs/register.service";
import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";
import { transporter } from "../../libs/nodemailer";
import Handlebars from "handlebars";

export const registerService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { nama, username, email, password } = req.body;

    // Validate input
    if (!nama || !email || !password || !username) {
      res.status(400).send({ message: "All fields are required" });
      return;
    }

    // Check if customer already exists
    const existingCustomer = await findUser(email);
    if (existingCustomer) {
      res.status(400).send({ message: "Email already exists" });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new customer
    const kasir = await prisma.pengguna.create({
      data: {
        role: "Kasir",
        nama,
        username,
        email,
        password: hashedPassword,
      },
    });

    // Generate verification token
    const payload = { id: kasir.id, role: "kasir" };
    const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
    const link = `${process.env.BASE_URL_FE}/verify/${token}`;

    // Prepare and send the email
    const templatePath = path.join(__dirname, "../../templates", "verifyEmail.hbs");
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = Handlebars.compile(templateSource);
    const html = compiledTemplate({ username: req.body.username, link });

    await transporter.sendMail({
      from: "Admin",
      to: req.body.email,
      subject: "Registration Successful",
      html,
    });

    res.status(201).send({
      message:
        "kasir created successfully. Please check your email for verification.",
      kasir,
      token : token
    });
  } catch (err : any) {
    console.error("Error during registration:", err);
    res
      .status(500)
      .send({ message: "An error occurred during registration", error: err.message });
  }
};
