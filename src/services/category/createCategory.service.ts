import prisma from "../../prisma";
import { createKomisiKategoriService } from "../komisiKategori/createKomisi.service";

interface createCategoryData {
  name: string;
  komisi?: number;
}

export const createCategoryService = async (categoryData: createCategoryData) => {
  try {
    const {name, komisi} = categoryData;

    if (!name) throw new Error("Nama kategori harus diisi");
    
    const existingCategory = await prisma.kategori.findUnique({
      where: { nama: name },
    });
    
    if (existingCategory && !existingCategory.isDeleted) {
      throw new Error("Kategori dengan nama ini sudah ada");
    }
    
    if (existingCategory && existingCategory.isDeleted) {
      const restored = await prisma.kategori.update({
        where: { id: existingCategory.id },
        data: {
          isDeleted: false,
          deletedAt: null,
        },
      });
    
      return {
        message: "Kategori di-restore",
        data: restored,
      };
    }
    
    const newCategory = await prisma.kategori.create({
        data: {
            nama: name
        }
    })

    const komisiData = await createKomisiKategoriService({
        persen: komisi || 0,
        kategoriId: newCategory.id
    })
    
    return {
        "message": "category created",
        "data":newCategory,
        "komisi": komisiData
    };
  } catch (err) {
    console.error("Error in createProductService:", err);
    throw err instanceof Error ? err : new Error("Failed to create category");
  }
};
