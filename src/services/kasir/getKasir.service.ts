import prisma from "../../prisma";

interface GetpenggunaByIdParams {
  penggunaId: number;
}

export const getpenggunaByIdService = async (params: GetpenggunaByIdParams) => {
  try {
    const { penggunaId } = params;
    
    const pengguna = await prisma.pengguna.findUnique({
      where: { 
        id: penggunaId, 
      },
      include: {
        Komisi: true,
        Penjualan: true,
      },
    });

    if (!pengguna) {
      throw new Error("pengguna not found");
    }

    const { password, ...safepenggunaData } = pengguna;

    return {
      message: "pengguna data retrieved successfully",
      data: safepenggunaData,
    };
  } catch (err) {
    console.error("Error in getpenggunaByIdService:", err);
    throw err;
  }
};