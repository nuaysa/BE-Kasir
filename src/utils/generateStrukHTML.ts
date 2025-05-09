import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import { Penjualan } from "../types/transaksi";

export const generateStrukHTML = (transaksi: Penjualan): string => {
  const filePath = path.join(process.cwd(), "src", "templates", "struk.hbs");
  const templateSource = fs.readFileSync(filePath, "utf-8");
  const template = Handlebars.compile(templateSource);

  const items = transaksi.PenjualanDetail.map((item) => ({
    nama: item.produk?.nama,
    qty: item.qty,
    subtotal: (item.qty * item.harga).toLocaleString("id-ID"),
  }));

  const html = template({
    id: transaksi.id.toString().padStart(3, "0"),
    kasir: transaksi.kasir?.nama || "Kasir",
    tanggal: new Date(transaksi.createdAt).toLocaleString("id-ID"),
    metodeBayar: transaksi.metodeBayar?.nama || "-",
    items,
    total: (transaksi.total ?? 0).toLocaleString("id-ID"),
  });

  return html;
};
