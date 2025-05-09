import prisma from "../../prisma";

interface deleteCategoryData {
  categoryId: number;
}

export const deleteCategoryService = async (categoryData: deleteCategoryData) => {
  try {
    const { categoryId } = categoryData;

    if (!categoryId) throw new Error("tentukan id kategori yang ingin dihapus");

    const deletedCategory = await prisma.kategori.update({
      where: {
        id: categoryId,
      },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
      include: {
        Produk: true,
      },
    });
    if (deletedCategory.Produk.length > 0) {
      await prisma.produk.updateMany({
        where: {
          kategoriId: deletedCategory.id,
        },
        data: {
          isDeleted: true,
          deletedAt: new Date(),
        },
      });
    }

    return {
      message: "Kategori dan produk yang bersangkutan berhasil dihapus",
      data: deletedCategory,
      product: deletedCategory.Produk,
    };
  } catch (err) {
    console.error("Error in deleteCategoryService:", err);
    throw err instanceof Error ? err : new Error("Failed to delete category");
  }
};
