import prisma from "../../prisma";

interface ProductData {
  id: number;
}

export const getProductByIdService = async (query: ProductData) => {
  try {
    const { id } = query;
    const product = await prisma.produk.findUnique({
      where: { id: id },
      include: {
        Stok: true,
        kategori: true,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (err) {
    console.error("Error in getProductByIdService:", err);
    throw err instanceof Error ? err : new Error("Failed to get product");
  }
};
