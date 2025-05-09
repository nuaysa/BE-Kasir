import prisma from "../../prisma";

interface getAllSuplierData {
  page?: number;
  pageSize?: number;
  sortBy?: "nama" | "kontak";
  order?: "asc" | "desc";
  filterBy?: "nama" | "kontak";
  filterValue?: string;
}

export const getAllSuplierService = async (query: getAllSuplierData) => {
  try {
    const { page = 1, pageSize = 20, sortBy, order, filterBy, filterValue } = query;
    const skip = (page - 1) * pageSize;
    const where: any = {};
    if (filterBy && filterValue) {
      if (filterBy === "nama") {
        where.nama = {
          contains: filterValue,
          mode: "insensitive",
        };
      } else if (filterBy === "kontak") {
        where.kontak = {
          contains: filterValue,
          mode: "insensitive",
        };
      }
    }

    const orderBy: any = {};
    if (sortBy) {
      if (sortBy === "nama") {
        orderBy.nama = order || "asc"; 
      } else if (sortBy === "kontak") {
        orderBy.kontak = order || "asc"; 
      }
    }

    const suplier = await prisma.suplier.findMany({
      where,
      orderBy,
      skip,
      take: pageSize,
    });

    const totalSuplier = await prisma.suplier.count({ where });

    const totalPage = Math.ceil(totalSuplier / pageSize);
    const currentPage = page;

    return {
      message: "Suplier ditemukan",
      data: suplier,
      meta: {
        total: totalSuplier,
        page: currentPage,
        pageSize,
        totalPages: totalPage,
      },
    };
  } catch (err) {
    console.error("Error in getAllSuplierService:", err);
    throw err instanceof Error ? err : new Error("Failed to get all suplier");
  }
};
