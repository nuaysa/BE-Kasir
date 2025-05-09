import prisma from "../../prisma";

interface createMetode {
  namaMetode: string;
}

export const createMetodeBayarService = async (metode: createMetode) => {
  try {
    const { namaMetode } = metode;

    if (!namaMetode) throw new Error("Nama metode tidak boleh kosong");

    return await prisma.$transaction(async (prisma) => {
      const createdMetode = await prisma.metodeBayar.create({
        data: { nama: namaMetode },
      });

      return {
        message: "Metode bayar berhasil dibuat",
        data: createdMetode,
      };
    });
  } catch (err) {
    console.error("Error in createMetodeBayarService:", err);
    throw err instanceof Error ? err : new Error("Failed to create metode bayar");
  }
};
