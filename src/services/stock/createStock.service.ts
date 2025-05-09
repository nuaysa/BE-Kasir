import prisma from "../../prisma";

interface createStockData {
    produkId: number;
    serialNumber?: string;
    expiredDate?: string;
    qty: number
}

export const createStockService = async (stockData: createStockData) => {
    try{
        const {produkId, serialNumber, expiredDate, qty} = stockData;
       
        if (!produkId || !qty) throw new Error("Semua field harus diisi");

        if(expiredDate? new Date(expiredDate) <= new Date() : false) {
            throw new Error("Tanggal expired tidak boleh di hari ini atau kurang dari hari ini")
        }

        const newStock = await prisma.stok.create({
            data: {
                qty: qty,
                produkId: produkId,
                serialNumber: serialNumber,
                expiredDate: expiredDate ? new Date(expiredDate) : undefined,
                status: "Tersedia",
            }
        })

        return {
            "message": "stock added",
            "data":newStock
        };

    } catch (err) {
    console.error('Error in createStockService:', err);
    throw err instanceof Error ? err : new Error("Failed to create Stock");
  }
}