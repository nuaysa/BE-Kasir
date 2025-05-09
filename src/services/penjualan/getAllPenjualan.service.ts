import prisma from "../../prisma";

interface getAllPenjualanData {
  userId: number;
  page?: number;
  pageSize?: number;
  sortBy?: "tanggal" | "total";
  order?: "asc" | "desc";
  filterBy?: "tanggal" | "kasir" | "tipe";
  filterValue?: string;
}

export const getAllPenjualanService = async (query: getAllPenjualanData) => {
  try {
    const { userId, page = 1, pageSize = 20, sortBy, order, filterBy, filterValue } = query;
    const skip = (page - 1) * pageSize;

    const cashier = await prisma.pengguna.findUnique({
      where: { id: userId },
    });
    if (!cashier) {
      throw new Error("unAuthorized");
    }

    const where: any = {};

    if (filterBy && filterValue) {
      if (filterBy === "tanggal") {
        where.tanggal = {
          gte: new Date(filterValue),
          lte: new Date(new Date(filterValue).setHours(23, 59, 59, 999)),
        };
      } else if (filterBy === "kasir") {
        where.kasir = {
          nama: {
            contains: filterValue,
            mode: "insensitive",
          },
        };
      } else if (filterBy === "tipe") {
        where.PenjualanDetail = {
          some: {
            tipe: filterValue,
          },
        };
      }
    }

    const orderBy: any = {};
    if (sortBy) {
      if (sortBy === "tanggal") {
        orderBy.tanggal = order || "asc";
      } else if (sortBy === "total") {
        orderBy.total = order || "asc";
      }
    }

    const penjualan = await prisma.penjualan.findMany({
      where,
      orderBy,
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
      skip,
      take: pageSize,
    });

    const totalPenjualan = await prisma.penjualan.count({ where });

    return {
      data: penjualan,
      meta: {
        total: totalPenjualan,
        page,
        pageSize,
        totalPages: Math.ceil(totalPenjualan / pageSize),
      },
    };
  } catch (err) {
    console.error("Error in getAllPenjualanService:", err);
    throw err instanceof Error ? err : new Error("Failed to get all penjualan");
  }
};
