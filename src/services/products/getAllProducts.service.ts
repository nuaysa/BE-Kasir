import prisma from "../../prisma";
import { Prisma } from "@prisma/client";

interface GetProductsParams {
  search?: string;
  category?: string;
  sortBy?: "nama" | "hargaJualRetail" | "stok";
  order?: "asc" | "desc";
  page?: number;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
}

interface ProductWithStock {
  id: number;
  nama: string;
  kategoriId: number;
  hargaBeli: number;
  hargaJualRetail: number;
  hargaJualGrosir: number;
  qtyMinGrosir: number;
  isDeleted: boolean;
  deletedAt: string | null;
  Stok: {
    id: number;
    produkId: number;
    serialNumber: string | null;
    expiredDate: string | null;
    qty: number;
    status: string;
    createdAt: string;
  }[];
  kategori: {
    id: number;
    nama: string;
    isDeleted: boolean;
    deletedAt: string | null;
  };
  totalStok: number;}

export const getProductsService = async (params: GetProductsParams) => {
  try {
    const { page = 1, pageSize = 10, category, search, sortBy = "nama", order = "asc", minPrice, maxPrice } = params;

    const skip = (page - 1) * pageSize;

    const where: Prisma.ProdukWhereInput = {
      isDeleted: false,
      AND: [
        ...(search
          ? [
              {
                nama: {
                  contains: search,
                  mode: "insensitive" as const,
                },
              },
            ]
          : []),
        ...(category
          ? [
              {
                kategori: {
                  nama: category,
                },
              },
            ]
          : []),
        ...(minPrice !== undefined
          ? [
              {
                hargaJualRetail: {
                  gte: minPrice,
                },
              },
            ]
          : []),
        ...(maxPrice !== undefined
          ? [
              {
                hargaJualRetail: {
                  lte: maxPrice,
                },
              },
            ]
          : []),
      ],
    };

    const [products, total] = await Promise.all([
      prisma.produk.findMany({
        where,
        orderBy: { [sortBy]: order },
        include: {
          Stok: true,
          kategori: true,
        },
        skip,
        take: pageSize,
      }),
      prisma.produk.count({ where }),
    ]);

    const productsWithStock = products.map(product => {
      const totalAvailableStock = product.Stok
        .filter(stok => stok.status === 'Tersedia')
        .reduce((sum, stok) => sum + stok.qty, 0);

      return {
        ...product,
        totalStok: totalAvailableStock
      };
    });

    return {
      data: productsWithStock,
      meta: {
        total: total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  } catch (err) {
    console.error("Error in getAllProductService:", err);
    throw err instanceof Error ? err : new Error("Failed to get products");
  }
};