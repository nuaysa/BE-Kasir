import prisma from "../../prisma";

interface getPenjualanByIdData {
    userId: number;
    penjualanId: number;
}

export const getPenjualanByIdService = async (query: getPenjualanByIdData) => {
    try {
        const { userId, penjualanId } = query;
        const cashier = await prisma.pengguna.findUnique({
            where: { id: userId },
        })
        if (!cashier) {
            throw new Error("unAuthorized")
        }

        if (!penjualanId) throw new Error("tentukan id penjualan yang ingin ditampilkan");

        const penjualan = await prisma.penjualan.findUnique({
            where: {
                id: penjualanId,
            },
            include: {
                PenjualanDetail: {
                    include: {
                        produk: true
                    },
                },
                kasir: {
                    select: {
                        nama: true,
                        Komisi: true
                    }
                },
                metodeBayar: true,
            },
        })

        return{
            penjualan
        }
   
    }catch(err) {
        console.error("Error in getPenjualanByIdService:", err);
        throw err instanceof Error ? err : new Error("Failed to get penjualan by id");
    }
}
