/*
  Warnings:

  - You are about to drop the `Komisi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Komisi" DROP CONSTRAINT "Komisi_kasirId_fkey";

-- DropForeignKey
ALTER TABLE "Komisi" DROP CONSTRAINT "Komisi_kategoriId_fkey";

-- DropForeignKey
ALTER TABLE "Komisi" DROP CONSTRAINT "Komisi_penjualanDetailId_fkey";

-- DropTable
DROP TABLE "Komisi";

-- CreateTable
CREATE TABLE "KomisiKategori" (
    "id" SERIAL NOT NULL,
    "kategoriId" INTEGER NOT NULL,
    "persen" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KomisiKategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KomisiKasir" (
    "id" SERIAL NOT NULL,
    "penjualanDetailId" INTEGER NOT NULL,
    "kasirId" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KomisiKasir_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KomisiKategori_kategoriId_key" ON "KomisiKategori"("kategoriId");

-- CreateIndex
CREATE UNIQUE INDEX "KomisiKasir_penjualanDetailId_key" ON "KomisiKasir"("penjualanDetailId");

-- AddForeignKey
ALTER TABLE "KomisiKategori" ADD CONSTRAINT "KomisiKategori_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "Kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KomisiKasir" ADD CONSTRAINT "KomisiKasir_penjualanDetailId_fkey" FOREIGN KEY ("penjualanDetailId") REFERENCES "PenjualanDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KomisiKasir" ADD CONSTRAINT "KomisiKasir_kasirId_fkey" FOREIGN KEY ("kasirId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
