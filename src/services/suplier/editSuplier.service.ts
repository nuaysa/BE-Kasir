import prisma from "../../prisma";

interface editSuplierData{
    namaSuplier?: string;
    kontak?: string;
    suplierId: number
}

export const editSuplierService = async (suplier: editSuplierData) => {
  try {
    const { suplierId, namaSuplier, kontak } = suplier;
    
    if(!suplierId) throw new Error("tentukan id suplier yang ingin diubah");

    const dataToUpdate: any = {};

    if (namaSuplier !== undefined) dataToUpdate.nama = namaSuplier;
    if (kontak !== undefined) dataToUpdate.kontak = kontak;

    if (Object.keys(dataToUpdate).length === 0) {
      throw new Error("Tidak ada field yang dikirim untuk diubah");
    }

    const newSuplier = await prisma.suplier.update({
      where: {
        id: suplierId,
      },
      data: dataToUpdate,
    });

    return {
      message: "Suplier berhasil diubah",
      data: newSuplier,
    };
  } catch (err) {
    console.error("Error in editSuplierService:", err);
    throw err instanceof Error ? err : new Error("Failed to edit suplier");
  }
};
