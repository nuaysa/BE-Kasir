// editKomisi.service.ts
import prisma from "../../prisma";

interface EditKomisiData {
  kategoriId: number;
  persen: number;
}

export const editKomisiKategoriService = async (data: EditKomisiData) => {
  try {
    if (!data.kategoriId || data.persen === undefined) {
      throw new Error("Semua field harus diisi");
    }

    // Cek apakah komisi sudah ada untuk kategori ini
    const existingKomisi = await prisma.komisiKategori.findFirst({
      where: {
        kategoriId: data.kategoriId
      }
    });

    let komisi;
    if (existingKomisi) {
      // Update jika sudah ada
      komisi = await prisma.komisiKategori.update({
        where: {
          id: existingKomisi.id
        },
        data: {
          persen: data.persen
        }
      });
    } else {
      // Buat baru jika belum ada
      komisi = await prisma.komisiKategori.create({
        data: {
          kategoriId: data.kategoriId,
          persen: data.persen
        }
      });
    }

    return komisi;
  } catch (err) {
    console.error("Error in editKomisiKategoriService:", err);
    throw err instanceof Error ? err : new Error("Failed to edit komisi");
  }
};