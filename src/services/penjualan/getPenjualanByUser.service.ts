import prisma from "../../prisma";

interface getPenjualanByUserData {
    userId: number;
}

export const getPenjualanByUserService = async (query: getPenjualanByUserData) => {
    try {
        const { userId } = query;
        const cashier = await prisma.pengguna.findUnique({
            where: { id: userId },
        })
        
        if (!cashier) {
            throw new Error("unAuthorized")
        }

        const penjualan = await prisma.penjualan.findMany({
            where: {
                kasirId: userId,
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
