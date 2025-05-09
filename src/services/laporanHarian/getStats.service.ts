import prisma from "../../prisma";

export const getDashboardStats = async (userId?: number) => {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
  
    const wherePenjualan = {
      tanggal: {
        gte: startOfDay,
        lte: endOfDay,
      },
      ...(userId && { kasirId: userId }),
    };
  
    const penjualanHariIni = await prisma.penjualan.findMany({
      where: wherePenjualan,
      include: {
        PenjualanDetail: {
          select: { produkId: true },
        },
      },
    });
  
    const todaySales = penjualanHariIni.reduce((sum, p) => sum + p.total, 0);
    const transactionCount = penjualanHariIni.length;
  
    const produkCount: Record<number, number> = {};
    for (const p of penjualanHariIni) {
      for (const d of p.PenjualanDetail) {
        produkCount[d.produkId] = (produkCount[d.produkId] || 0) + 1;
      }
    }
  
    const mostSoldProductId = Object.entries(produkCount)
      .sort((a, b) => b[1] - a[1])[0]?.[0];
  
    let popularProduct = "-";
    if (mostSoldProductId) {
      const produk = await prisma.produk.findUnique({
        where: { id: Number(mostSoldProductId) },
        select: { nama: true },
      });
      if (produk) popularProduct = produk.nama;
    }
  
    return {
      todaySales,
      transactionCount,
      popularProduct,
    };
  };
  