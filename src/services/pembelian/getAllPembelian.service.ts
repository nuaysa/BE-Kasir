import prisma from "../../prisma";

interface getAllPembelianData {
  page?: number;
  pageSize?: number;
  sortBy?: "tanggal" | "totalHarga";
  order?: "asc" | "desc";
  filterBy?: "tanggal" | "suplier" | "produk";
  filterValue?: string;
}

export const getAllPembelianService = async (query: getAllPembelianData) => {
  try {
    const { page = 1, pageSize = 20, sortBy, order, filterBy, filterValue } = query;
    const skip = (page - 1) * pageSize;
    const where: any = {};
    if (filterBy && filterValue) {
      if (filterBy === "tanggal") {
        where.tanggal = {
          gte: new Date(filterValue),
          lte: new Date(new Date(filterValue).setHours(23, 59, 59, 999)),
        };
      } else if (filterBy === "suplier") {
        where.suplier = {
          nama: {
            contains: filterValue,
            mode: "insensitive",
          },
        };
      } else if (filterBy === "produk") {
        where.produk = {
          nama: {
            contains: filterValue,
            mode: "insensitive",
          },
        };
      }
    }

    const orderBy: any = {};
    if (sortBy) {
      if (sortBy === "tanggal") {
        orderBy.tanggal = order || "asc";
      } else if (sortBy === "totalHarga") {
        orderBy.totalHarga = order || "asc";
      }
    }

    const pembelian = await prisma.pembelian.findMany({
      where,
      orderBy,
      include: {
        PembelianDetail: {
          include: {
            produk: true,
          },
        },
        suplier: true,
      },
      skip,
      take: pageSize,
    });

    const totalPembelian = await prisma.pembelian.count({ where });
    return {
      data: pembelian,
      meta: {
        total: totalPembelian,
        page,
        pageSize,
      },
    };
  } catch (err) {
    console.error("Error in getAllPembelianService:", err);
    throw err instanceof Error ? err : new Error("Failed to get all pembelian");
  }
};
