import prisma from "../../prisma";

export const getMetodeBayarService = async () => {
    try {
        return await prisma.metodeBayar.findMany({
            orderBy: { id: "asc" },
            select: {
                id: true,
                nama: true,
            },
        });
    }
    catch (err) {
        console.error("Error in getMetodeBayarService:", err);
        throw err instanceof Error ? err : new Error("Failed to get metode bayar");
    }
};
