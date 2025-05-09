import prisma from "../../prisma";

export const getAdminDashboardStats = async () => {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  const penjualanHariIni = await prisma.penjualan.findMany({
    where: {
      tanggal: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    include: {
      PenjualanDetail: { select: { produkId: true } },
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

  const mostSoldProductId = Object.entries(produkCount).sort((a, b) => b[1] - a[1])[0]?.[0];
  let popularProduct = "-";
  if (mostSoldProductId) {
    const produk = await prisma.produk.findUnique({
      where: { id: Number(mostSoldProductId) },
      select: { nama: true },
    });
    if (produk) popularProduct = produk.nama;
  }

  const totalSales = await prisma.penjualan.aggregate({
    _sum: { total: true },
  });
  const totalTransactions = await prisma.penjualan.count();
  const totalKasir = await prisma.pengguna.count({
    where: { role: "Kasir" },
    select: { id: true, nama: true },
  })

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date;
  }).reverse();

  const salesByDay = await Promise.all(
    last7Days.map(async (date) => {
      const start = new Date(date.setHours(0, 0, 0, 0));
      const end = new Date(date.setHours(23, 59, 59, 999));
      const sales = await prisma.penjualan.aggregate({
        where: { tanggal: { gte: start, lte: end } },
        _sum: { total: true },
      });
      return {
        date: start.toISOString().slice(0, 10),
        total: sales._sum.total || 0,
      };
    })
  );

  const salesByKasirRaw = await prisma.penjualan.groupBy({
    by: ["kasirId"],
    _count: true,
  });
  const salesByKasir = await Promise.all(
    salesByKasirRaw.map(async (item) => {
      const kasir = await prisma.pengguna.findUnique({
        where: { id: item.kasirId, role: "Kasir"},
        select: { nama: true },
      });
      return {
        nama: kasir?.nama || "Tidak diketahui",
        totalTransaksi: item._count,
      };
    })
  );

  const detail = await prisma.penjualanDetail.findMany({
    include: {
        produk: {
          select: {
            kategori: { select: { nama: true } },
          },
        },
      },
    });
    const categoryMap: Record<string, number> = {};
    for (const d of detail) {
      const kategori = d.produk.kategori?.nama || "Lainnya";
      categoryMap[kategori] = (categoryMap[kategori] || 0) + d.id;
    };

  return {
    summary: {
      todaySales,
      transactionCount,
      popularProduct,
      totalSales: totalSales._sum.total || 0,
      totalTransactions,
      totalKasir,
    },
    salesByDay,
    salesByKasir,
  };
};
