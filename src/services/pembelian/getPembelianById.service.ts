import prisma from "../../prisma";

interface getPembelianByIdData {
    pembelianId: number;
}

export const getPembelianByIdService = async (query: getPembelianByIdData) => {
    try{
        const {pembelianId } = query;

        if (!pembelianId) throw new Error("tentukan id pembelian yang ingin ditampilkan");

        const pembelian = await prisma.pembelian.findUnique({
            where: {
                id: pembelianId,
            },
            include: {
                PembelianDetail: 
                {
                    include: {
                        produk: true,
                    },
                },
                suplier: true,
            },
        })

        if (!pembelian) throw new Error("Pembelian tidak ditemukan");

        return {
            message: "Pembelian ditemukan",
            data: pembelian,
        };
    }catch (err) {
        console.error("Error in getPembelianByIdService:", err);
        throw err instanceof Error ? err : new Error("Failed to get pembelian by id");
    }
}