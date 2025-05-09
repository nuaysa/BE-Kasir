import prisma from "../../prisma";

interface DeleteKasirServiceProps {
    id: number;
}

export const deleteKasirService = async (data: DeleteKasirServiceProps) => {
    try {
        const { id } = data

        const kasir = await prisma.pengguna.update({
            where: { id },
            data: {
                isDeleted: true,
                deletedAt: new Date()
            },
        });
        return {
            message: "Kasir deleted successfully",
            data: kasir,
        };
    } catch (err) {
        console.error("Error in deleteKasirService:", err);
        throw err instanceof Error ? err : new Error("Failed to delete Kasir");
    }
};