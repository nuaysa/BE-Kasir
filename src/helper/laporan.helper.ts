import prisma from "../prisma";
import { Prisma, PrismaClient } from "prisma/generated/client";

export const generateLaporanHarian = async (params?: { tanggal?: Date }) => {
    const tanggal = params?.tanggal || new Date();
    const startOfDay = new Date(tanggal.setHours(0, 0, 0, 0));
    const endOfDay = new Date(tanggal.setHours(23, 59, 59, 999));
  
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // 1. Data Stok (selalu dihitung, meski tidak ada transaksi)
      const stokAwal = await getStokAwal(tx, startOfDay);
      const stokAkhir = await tx.stok.count({ where: { status: "Tersedia" } });
  
      // 2. Data Penjualan & Komisi (bisa null)
      const [penjualan, komisi, hpp] = await Promise.all([
        tx.penjualan.aggregate({ 
          _sum: { total: true },
          where: { tanggal: { gte: startOfDay, lte: endOfDay } }
        }),
        tx.komisiKasir.aggregate({ 
          _sum: { jumlah: true },
          where: { 
            penjualanDetail: { 
              penjualan: { tanggal: { gte: startOfDay, lte: endOfDay } } 
            } 
          }
        }),
        calculateHPP(tx, startOfDay, endOfDay) // Fungsi terpisah
      ]);
  
      // 3. Simpan/update laporan
      return await tx.laporanHarian.upsert({
        where: { tanggal: startOfDay },
        update: {
          stokAkhir,
          totalPenjualan: penjualan._sum.total || 0,
          totalHPP: hpp,
          totalLaba: (penjualan._sum.total || 0) - hpp - (komisi._sum.jumlah || 0),
          totalKomisi: komisi._sum.jumlah || 0,
        },
        create: {
          tanggal: startOfDay,
          stokAwal,
          stokAkhir,
          totalPenjualan: penjualan._sum.total || 0,
          totalHPP: hpp,
          totalLaba: (penjualan._sum.total || 0) - hpp - (komisi._sum.jumlah || 0),
          totalKomisi: komisi._sum.jumlah || 0,
        }
      });
    });
  };
  
  // Helper untuk HPP
  const calculateHPP = async (tx: Prisma.TransactionClient, start: Date, end: Date) => {
    const details = await tx.penjualanDetail.findMany({
      where: { penjualan: { tanggal: { gte: start, lte: end } } },
      include: { produk: { select: { hargaBeli: true } } }
    });
    return details.reduce((sum, d) => sum + (d.produk.hargaBeli * d.qty), 0);
  };
  
  // Helper untuk Stok Awal
  const getStokAwal = async (tx: Prisma.TransactionClient, startOfDay: Date) => {
    const laporanKemarin = await tx.laporanHarian.findFirst({
      where: { tanggal: { lt: startOfDay } },
      orderBy: { tanggal: "desc" },
    });
    return laporanKemarin?.stokAkhir || await tx.stok.count({
      where: { status: "Tersedia", createdAt: { lt: startOfDay } }
    });
  };