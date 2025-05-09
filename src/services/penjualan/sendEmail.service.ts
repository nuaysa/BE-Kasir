import prisma from "../../prisma";import { generateStrukHTML } from "../../utils/generateStrukHTML";
import path from "path";
import fs from "fs";
import { transporter } from "../../libs/nodemailer";
import Handlebars from "handlebars";

interface sendEmailData {
  penjualanId: number;
  emailCustomer: string;
}

export const sendEmailService = async (data: sendEmailData) => {
  try {
    const { penjualanId, emailCustomer } = data;

    if (!emailCustomer) {
      throw new Error("Email customer harus diisi");
    }

    const transaksi = await prisma.penjualan.findUnique({
      where: { id: Number(penjualanId) },
      include: {
        PenjualanDetail: {
          include: {
            produk: true,
            Komisi: true,
          },
        },
        kasir: true,
        metodeBayar: true,
      },
    });

    if (!transaksi) {
      throw new Error("Transaksi tidak ditemukan");
    }

    const templatePath = path.join(__dirname, "../../templates", "struk.hbs");
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = Handlebars.compile(templateSource);
    const html = generateStrukHTML(transaksi);

    await transporter.sendMail({
      from: '"Aplikasi Kasir" <no-reply@kasir.com>',
      to: emailCustomer,
      subject: `Struk Transaksi #${penjualanId}`,
      html,
    });

    return { message: "Email berhasil dikirim" };
  } catch (err) {
    console.error("Error in sendEmailService:", err);
    throw err instanceof Error ? err : new Error("Failed to send email");
  }
};
