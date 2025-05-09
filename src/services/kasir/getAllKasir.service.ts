import prisma from "../../prisma";

export const getAllKasirService = async () => {
  try {
    const kasir = await prisma.pengguna.findMany({
      where: {
        role: "Kasir",
      },
      include: {
        Komisi: true,
      },
    });

    return {
      message: "kasir data",
      data: kasir,
    };
  } catch (err) {
    console.error("Error in getKomisiKategoriService:", err);
    throw err instanceof Error ? err : new Error("Failed to get Komisi");
  }
};
