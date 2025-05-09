import prisma from "../../prisma";

interface GetLaporanHarianParams {
  page?: number;
  pageSize?: number;
  sortBy?: "tanggal" | "totalPenjualan";
  order?: "asc" | "desc";
  filterDate?: string; 
}

export const getLaporanHarianService = async (params: GetLaporanHarianParams) => {
  try {
    const { page = 1, pageSize = 20, sortBy = "tanggal", order = "desc", filterDate } = params;

    const skip = (page - 1) * pageSize;

    const where: any = {};

    console.log("where", where, "filterDate", filterDate);
    if (filterDate) {
      const start = new Date(filterDate);
      const end = new Date(new Date(filterDate).setHours(23, 59, 59, 999));
      where.tanggal = {
        gte: start,
        lte: end,
      };
    }

    const orderBy: any = {};
    if (sortBy === "totalPenjualan") {
      orderBy.totalPenjualan = order;
    } else {
      orderBy.tanggal = order;
    }

    const laporan = await prisma.laporanHarian.findMany({
      where,
      orderBy,
      skip,
      take: pageSize,
    });

    const total = await prisma.laporanHarian.count({ where });

    return {
      data: laporan,
      meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  } catch (err) {
    console.error("Error in getLaporanHarianService:", err);
    throw err instanceof Error ? err : new Error("Failed to get laporan harian");
  }
};
