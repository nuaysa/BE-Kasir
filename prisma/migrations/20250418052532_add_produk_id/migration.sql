/*
  Warnings:

  - Added the required column `produkId` to the `PenjualanDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PenjualanDetail" ADD COLUMN     "produkId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PenjualanDetail" ADD CONSTRAINT "PenjualanDetail_produkId_fkey" FOREIGN KEY ("produkId") REFERENCES "Produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
