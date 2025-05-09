import prisma from "../../prisma";

interface getAllStockData {
    userId: number;
    status?: "Tersedia" | "Terjual" | "Rusak" | "Kadaluarsa";
    sortBy?: "expiredDate" | "id" | "qty";
    order?: "asc" | "desc";
    page?: number;
    pageSize?: number;
  }
  
  export const getAllstockService = async (data: getAllStockData) => {
    try {
      const {
        userId,
        status,
        sortBy = "id",
        order = "asc",
        page = 1,
        pageSize = 20,
      } = data;
  
      const whereCondition = status ? { status } : {};
  
      const [stock, total] = await prisma.$transaction([
        prisma.stok.findMany({
          where: whereCondition,
          orderBy: { [sortBy]: order },
          include: {
            produk: {
              select: {
                nama: true,
                kategori: {
                  select: { nama: true },
                },
              },
            },
          },
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        prisma.stok.count({ where: whereCondition }),
      ]);
  
      return {
        message: "Data stock berhasil diambil",
        data: stock,
        meta: {
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize),
        },
      };
    } catch (err) {
      console.error("Error in getAllstockService:", err);
      throw new Error("Gagal mengambil data stock");
    }
  };
  