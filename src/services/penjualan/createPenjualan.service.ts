import { generateLaporanHarian } from "../../helper/laporan.helper";
import prisma from "../../prisma";

interface CreatePenjualanInput {
  kasirId: number;
  metodeBayarId: number;
  items: {
    produkId: number;
    qty: number;
  }[];
}

export const createPenjualanService = async (data: CreatePenjualanInput) => {
  try {
    const { kasirId, metodeBayarId, items } = data;
     
    console.log(data, "createPenjualanService data:", items);
    if (!kasirId || !metodeBayarId || !items || items.length === 0) {
      throw new Error("Data penjualan tidak lengkap");
    }
    const stokDipakai: { [produkId: number]: number[] } = {};

    for (const item of items) {
          const stokTersedia = await prisma.stok.findMany({
        where: {
          produkId: item.produkId,
          status: "Tersedia",
        },
        take: item.qty,
      });


      if (stokTersedia.length < item.qty) {
        throw new Error(`Stok tidak cukup untuk produk ID ${item.produkId}`);
      }

      stokDipakai[item.produkId] = stokTersedia.map((s) => s.id);
    }

    return await prisma.$transaction(async (tx) => {
      const penjualan = await tx.penjualan.create({
        data: {
          kasirId,
          metodeBayarId,
          total: 0,
        },
      });

      let totalHarga = 0;

      for (const item of items) {
        const stokIds = stokDipakai[item.produkId];

        for (let i = 0; i < item.qty; i++) {
          const stokId = stokIds[i];

          const produk = await tx.produk.findUnique({
            where: { id: item.produkId },
            select: {
              kategori: { select: { komisi: true } },
              hargaJualGrosir: true,
              hargaJualRetail: true,
              qtyMinGrosir: true,
            },
          });
          if (!produk) throw new Error("Produk tidak ditemukan");

          const tipe: "Eceran" | "Grosir" = item.qty >= produk.qtyMinGrosir ? "Grosir" : "Eceran";

          const harga = tipe === "Grosir" ? produk.hargaJualGrosir : produk.hargaJualRetail;
          const detail = await tx.penjualanDetail.create({
            data: {
              penjualanId: penjualan.id,
              stokId,
              harga: harga,
              qty: 1,
              tipe: tipe,
              produkId: item.produkId,
            },
          });

          const persenKomisi = produk?.kategori?.komisi?.[0]?.persen || 0;
          const komisiAmount = Math.floor((detail.harga * persenKomisi) / 100);

          await tx.komisiKasir.create({
            data: {
              penjualanDetailId: detail.id,
              kasirId: kasirId,
              jumlah: komisiAmount,
            },
          });

          await tx.stok.update({
            where: { id: stokId },
            data: { status: "Terjual" },
          });

          totalHarga += harga;
        }
      }

      await tx.penjualan.update({
        where: { id: penjualan.id },
        data: { total: totalHarga },
      });

      await generateLaporanHarian({ tanggal: new Date() });
      
      return {
        message: "Penjualan berhasil diproses",
        penjualanId: penjualan.id,
        total: totalHarga,
      };
    });
    
  } catch (err) {
    console.error("Error in createPenjualanService:", err);
    throw err instanceof Error ? err : new Error("Gagal memproses penjualan");
  }
};
