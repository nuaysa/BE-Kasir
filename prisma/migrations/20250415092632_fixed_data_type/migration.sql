/*
  Warnings:

  - You are about to alter the column `jumlah` on the `Komisi` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `totalPenjualan` on the `LaporanHarian` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `totalHPP` on the `LaporanHarian` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `totalLaba` on the `LaporanHarian` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `totalKomisi` on the `LaporanHarian` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `total` on the `Pembelian` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `harga` on the `PembelianDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `total` on the `Penjualan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `harga` on the `PenjualanDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `jumlah` on the `Piutang` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `hargaBeli` on the `Produk` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `hargaJualRetail` on the `Produk` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `hargaJualGrosir` on the `Produk` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Komisi" ALTER COLUMN "jumlah" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "LaporanHarian" ALTER COLUMN "totalPenjualan" SET DATA TYPE INTEGER,
ALTER COLUMN "totalHPP" SET DATA TYPE INTEGER,
ALTER COLUMN "totalLaba" SET DATA TYPE INTEGER,
ALTER COLUMN "totalKomisi" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Pembelian" ALTER COLUMN "total" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "PembelianDetail" ALTER COLUMN "harga" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Penjualan" ALTER COLUMN "total" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "PenjualanDetail" ALTER COLUMN "harga" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Piutang" ALTER COLUMN "jumlah" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Produk" ALTER COLUMN "hargaBeli" SET DATA TYPE INTEGER,
ALTER COLUMN "hargaJualRetail" SET DATA TYPE INTEGER,
ALTER COLUMN "hargaJualGrosir" SET DATA TYPE INTEGER;
