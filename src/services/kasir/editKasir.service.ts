import prisma from "../../prisma";
import bcrypt from "bcrypt";

interface EditKasirServiceProps {
  id: number;
  nama?: string;
  username?: string;
  password?: string;
}

export const editKasirService = async (data : EditKasirServiceProps) => {
  try {
    const { id, nama, username, password } = data;

    const updateData: any = {};
    if (nama !== undefined) updateData.nama = nama;
    if (username !== undefined) updateData.username = username;
    if (password && password.trim() !== "") {
      const hashed = await bcrypt.hash(password, 10);
      updateData.password = hashed;
    }

    const kasir = await prisma.pengguna.update({
      where: { id },
      data: updateData,
      include: {
        Komisi: true,
      },
    });

    return {
      message: "kasir data",
      data: kasir,
    };
  } catch (err) {
    console.error("Error in editKasirService:", err);
    throw err instanceof Error ? err : new Error("Failed to edit kasir");
  }
};
