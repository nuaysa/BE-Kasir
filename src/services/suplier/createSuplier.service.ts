import prisma from "../../prisma";

interface createSuplierData {
  namaSuplier: string;
  kontak: string;
}

export const createSuplierService = async (suplier: createSuplierData) => {
  try {
    const { namaSuplier, kontak } = suplier;

    if (!namaSuplier || !kontak) throw new Error("Semua field harus diisi");

    const newSuplier = await prisma.suplier.create({
      data: {
        nama: namaSuplier,
        kontak: kontak,
      },
    });

    return {
      message: "Suplier added",
      data: newSuplier,
    };
  } catch (err) {
    console.error("Error in createSuplierService:", err);
    throw err instanceof Error ? err : new Error("Failed to add suplier");
  }
};
