import prisma from "../../prisma";
import { format } from "date-fns";

interface getChartData {
  startDate?: string;
  endDate?: string;
}

export const getChartStats = async (data: getChartData) => {
  try {
    let { startDate, endDate } = data;

    if (!startDate) {
      const earliest = await prisma.penjualan.findFirst({
        orderBy: { tanggal: "asc" },
        select: { tanggal: true },
      });
      startDate = earliest?.tanggal?.toISOString().split("T")[0] ?? new Date().toISOString().split("T")[0];
    }

    if (!endDate) {
      endDate = new Date().toISOString().split("T")[0];
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    const salesByDay = await Promise.all(
      Array.from({ length: daysDiff + 1 }).map(async (_, i) => {
        const date = new Date(start);
        date.setDate(date.getDate() + i);

        const dayStart = new Date(date.setHours(0, 0, 0, 0));
        const dayEnd = new Date(date.setHours(23, 59, 59, 999));

        const penjualan = await prisma.penjualan.aggregate({
          where: { tanggal: { gte: dayStart, lte: dayEnd } },
          _sum: { total: true },
        });

        return {
          tanggal: format(dayStart, "dd/MM"),
          total: penjualan._sum.total || 0,
        };
      })
    );

    const salesByKasirRaw = await prisma.penjualan.groupBy({
      by: ["kasirId"],
      where: {
        tanggal: { gte: start, lte: end },
      },
      _count: { id: true },
    });

    const kasirData = await prisma.pengguna.findMany({
      where: { id: { in: salesByKasirRaw.map((d) => d.kasirId) }, role: "Kasir" },
      select: { id: true, nama: true },
    });

    const salesByKasir = salesByKasirRaw.map((item) => {
      const kasir = kasirData.find((k) => k.id === item.kasirId);
      return {
        kasir: kasir?.nama || `Kasir ${item.kasirId}`,
        jumlah: item._count.id,
      };
    });

    const penjualanDetail = await prisma.penjualanDetail.findMany({
      where: {
        penjualan: {
          tanggal: { gte: start, lte: end },
        },
      },
      include: {
        produk: { include: { kategori: true } },
      },
    });

    const kategoriCount: Record<string, number> = {};
    for (const detail of penjualanDetail) {
      const kategori = detail.produk.kategori?.nama || "Lainnya";
      kategoriCount[kategori] = (kategoriCount[kategori] || 0) + detail.qty;
    }

    const salesByCategory = Object.entries(kategoriCount).map(([kategori, jumlah]) => ({
      kategori,
      jumlah,
    }));

    return {
      salesByDay,
      salesByKasir,
      salesByCategory,
    };
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching chart stats");
  }
};
