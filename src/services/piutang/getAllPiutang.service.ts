import prisma from "../../prisma";

interface getAllPiutangData {
  status?: "Lunas" | "BelumLunas";
}

export const getAllPiutangService = async (data: getAllPiutangData) => {
  try {
    const { status } = data;

    const whereCondition = status ? { status } : {};
    const piutang = await prisma.piutang.findMany({
      where: whereCondition,
    });

    return {
      message: "Data piutang berhasil diambil",
      data: piutang,
    };
  } catch (err) {
    console.error("Error in getAllPiutangService:", err);
    throw new Error("Gagal mengambil data piutang");
  }
};
