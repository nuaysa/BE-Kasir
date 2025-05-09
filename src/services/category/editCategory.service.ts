import prisma from "../../prisma";
import { editKomisiKategoriService } from "../komisiKategori/editKomisi.service";

interface editCategoryData {
  categoryId: number;
  name: string;
  komisi?: number;
}

export const editCategoryService = async (categoryData: editCategoryData) => {
  try {
    if (!categoryData.categoryId) throw new Error("Tentukan id kategori yang ingin diubah");
    if (!categoryData.name) throw new Error("Nama kategori harus diisi");

    const result = await prisma.$transaction(async (prisma) => {
      const updatedCategory = await prisma.kategori.update({
        where: { id: categoryData.categoryId },
        data: { nama: categoryData.name },
      });

      let komisiData = null;
      if (categoryData.komisi !== undefined) {
        komisiData = await editKomisiKategoriService({
          kategoriId: updatedCategory.id,
          persen: categoryData.komisi,
        });
      }

      return { category: updatedCategory, komisi: komisiData };
    });

    return {
      message: "Category updated",
      data: result.category,
      komisi: result.komisi,
    };
  } catch (err) {
    console.error("Error in editCategoryService:", err);
    throw err instanceof Error ? err : new Error("Failed to edit category");
  }
};
