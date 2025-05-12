import { StatusStok } from "prisma/generated/client";
import prisma from "../../prisma";

interface editStockData {
  userId: number;
  serialNumber: string;
  status?: StatusStok;
}
export const editStockService = async (stockData: editStockData) => {
  try {
    const { userId, serialNumber } = stockData;

    const cashier = await prisma.pengguna.findUnique({
      where: { id: userId },
    });
    if (!cashier) {
      throw new Error("Unauthorized");
    }

    const dataToUpdate: any = {};
    if (stockData.status !== undefined) dataToUpdate.status = stockData.status;

    const stock = await prisma.stok.update({
      where: {
        serialNumber: serialNumber, 
      },
      data: dataToUpdate,
    });

    return {
      message: "Stok berhasil diubah",
      data: stock,
    };
  } catch (err) {
    console.error("Error in editStockService:", err);
    throw err instanceof Error ? err : new Error("Failed to edit Stock");
  }
};
