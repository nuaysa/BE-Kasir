import prisma from "../../prisma";

interface createkomisiData {
  kategoriId: number;
  persen: number;
}

export const createKomisiKategoriService = async (komisiData: createkomisiData) => {
  try {
    const { kategoriId, persen } = komisiData;

    if (!kategoriId) {
      throw new Error("id kategori harus diisi");
    }

    if (!persen) {
      throw new Error("persen harus diisi");
    }

    const komisi = await prisma.komisiKategori.create({
      data: {
        kategoriId: kategoriId,
        persen: persen,
      },
    });

    return {
      message: "komisi ditambahkan !",
      data: komisi,
    };
  } catch (err) {
    console.error("Error in createKomisiKategoriService:", err);
    throw err instanceof Error ? err : new Error("Failed to add Komisi");
  }
};
