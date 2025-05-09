import { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export const loginService = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Request Body:", req.body);

    // Validasi input
    if (!req.body || !req.body.data || !req.body.password) {
      res.status(400).json({ message: "Email or username and password are required" });
      return;
    }

    const { data, password } = req.body;

    // Cari user berdasarkan email / username
    const pengguna = await prisma.pengguna.findFirst({
      where:{
        OR: [
          { email: data },
          { username: data }
        ]
      }
    });

    // Jika user tidak ditemukan
    if (!pengguna) {
      throw new Error("account not found!");
    }


    // Validasi password
    const isValidPass = await bcrypt.compare(password, pengguna.password);
    if (!isValidPass) {
      throw new Error("Incorrect Password!");
    }

    // Jika akun belum diverifikasi
    if (!pengguna.verifikasi) {
      throw new Error("Your account is not verified. Please verify your account before logging in.");
    }

    // Buat token JWT untuk user
    const payload = {
      id: pengguna.id,
      email: pengguna.email,
      username: pengguna.username,
      nama: pengguna.nama,
      role: pengguna.role,
    };
    const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

    console.log("Generated Token:", token, "id:", payload.id);

    res.status(200).json({ message: "Login Successfully", pengguna, token });
  } catch (err: unknown) {
    console.error("Error during login:", err);

    // Tangani error dengan aman di TypeScript
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
};
