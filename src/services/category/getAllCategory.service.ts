import prisma from "../../prisma";

export const getAllCategoryService = async () => {
  try {
    const categories = await prisma.kategori.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        komisi: true,
      },
    });
    return {
      message: "Kategori ditemukan",
      data: categories,
    };
  } catch (err) {
    console.error("Error in getAllCategoryService:", err);
    throw err instanceof Error ? err : new Error("Failed to get all categories");
  }
};
