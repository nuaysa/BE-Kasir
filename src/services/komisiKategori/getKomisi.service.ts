import prisma from "../../prisma";

export const getKomisiKategoriService = async () => {
  try {
    const komisiRules = await prisma.komisiKategori.findMany({
      include: {
        kategori: {
          select: {
            id: true,
            nama: true,
            isDeleted: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const activeRules = komisiRules.filter((rule) => !rule.kategori.isDeleted);

    return activeRules.map((rule) => ({
      id: rule.id,
      persen: rule.persen,
      kategori: {
        id: rule.kategori.id,
        nama: rule.kategori.nama,
      },
      createdAt: rule.createdAt,
    }));
  } catch (err) {
    console.error("Error in getKomisiKategoriService:", err);
    throw err instanceof Error ? err : new Error("Failed to get Komisi");
  }
};
