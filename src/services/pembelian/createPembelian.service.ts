import { generateLaporanHarian } from "../../helper/laporan.helper";
import prisma from "../../prisma";

interface ItemPembelian {
  produkId: number;
  qty: number;
  harga: number;
  expiredDate?: string;
  serialNumber?: string;
}

interface CreatePembelianData {
  suplierId: number;
  items: ItemPembelian[];
  status: "Lunas" | "Kredit";
  tanggalJatuhTempo?: Date;
}

export const createPembelianService = async (data: CreatePembelianData) => {
  try {
    if (!data.suplierId || !data.items || data.items.length === 0) {
      throw new Error("Data supplier dan items harus diisi");
    }

    const total = data.items.reduce((sum, item) => sum + item.harga * item.qty, 0);

    return await prisma.$transaction(async (prisma) => {
      const pembelian = await prisma.pembelian.create({
        data: {
          suplierId: data.suplierId,
          total,
          status: data.status,
          PembelianDetail: {
            create: data.items.map((item) => ({
              produkId: item.produkId,
              qty: item.qty,
              harga: item.harga,
            })),
          },
          ...(data.status === "Kredit" && {
            Piutang: {
              create: {
                jumlah: total,
                tanggalJatuhTempo: data.tanggalJatuhTempo || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                status: "BelumLunas",
              },
            },
          }),
        },
        include: {
          PembelianDetail: true,
          Piutang: true,
        },
      });

      for (const item of data.items) {
        for (let i = 0; i < item.qty; i++) {
          await prisma.stok.create({
            data: {
              produkId: item.produkId,
              qty: 1,
              status: "Tersedia",
              serialNumber: item.serialNumber ? `${item.serialNumber}-${i + 1}` : undefined,
              expiredDate: item.expiredDate ? new Date(item.expiredDate) : undefined,
            },
          });
        }
      }

      await generateLaporanHarian({ tanggal: new Date() });

      return pembelian;
    });
  } catch (err) {
    console.error("Error in createPembelianService:", err);
    throw err instanceof Error ? err : new Error("Failed to make Pembelian");
  }
};
