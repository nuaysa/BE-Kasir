import prisma from "../../prisma";

interface editPembelianData {
    pembelianId: number;
    statusPembelian?: "Lunas" | "Kredit"
    statusPiutang?: "Lunas" | "BelumLunas"
}
export const editPembelianService = async (pembelian: editPembelianData) => {
    try {
      const {pembelianId, statusPembelian, statusPiutang } = pembelian;
  
      if (!pembelianId) throw new Error("Tentukan id pembelian yang ingin diubah");
  
      return await prisma.$transaction(async (prisma) => {
        const updatedPembelian = await prisma.pembelian.update({
          where: { id: pembelianId },
          data: { status: statusPembelian },
        });
  
        if (statusPembelian === "Lunas") {
          await prisma.piutang.updateMany({
            where: { pembelianId },
            data: { status: "Lunas" },
          });
        }
  
        if (statusPiutang) {
          await prisma.piutang.updateMany({
            where: { pembelianId },
            data: { status: statusPiutang },
          });
        }
  
        return {
          message: "Pembelian dan piutang berhasil diupdate",
          data: updatedPembelian,
        };
      });
    } catch (err) {
      console.error("Error in editPembelianService:", err);
      throw err instanceof Error ? err : new Error("Failed to edit pembelian");
    }
  };