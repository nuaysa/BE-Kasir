import prisma from "../../prisma";

interface deleteProductData {
  productId: number;
}

export const deleteProductService = async (product: deleteProductData) => {
  try {
    const { productId } = product;
    if (!productId) throw new Error("tentukan id produk yang ingin dihapus");

    const deletedProduct = await prisma.produk.update({
      where: {
        id: productId,
      },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });

    return {
      message: "Produk berhasil dihapus",
      data: deletedProduct,
    };
  } catch (err) {
    console.error("Error in deleteProductService:", err);
    throw err instanceof Error ? err : new Error("Failed to delete product");
  }
};
