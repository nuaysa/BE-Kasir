/*
  Warnings:

  - Added the required column `kategoriId` to the `Komisi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Komisi" ADD COLUMN     "kategoriId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Komisi" ADD CONSTRAINT "Komisi_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "Kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
