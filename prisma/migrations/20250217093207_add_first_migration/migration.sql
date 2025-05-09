-- CreateEnum
CREATE TYPE "StatusPiutang" AS ENUM ('BelumLunas', 'Lunas');

-- CreateEnum
CREATE TYPE "StatusStok" AS ENUM ('Tersedia', 'Terjual');

-- CreateEnum
CREATE TYPE "JenisPenjualan" AS ENUM ('Eceran', 'Grosir');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Kasir');

-- CreateEnum
CREATE TYPE "StatusPembelian" AS ENUM ('Lunas', 'Kredit');

-- CreateTable
CREATE TABLE "Kategori" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "kategoriId" INTEGER NOT NULL,
    "hargaBeli" DECIMAL(65,30) NOT NULL,
    "hargaJualRetail" DECIMAL(65,30) NOT NULL,
    "hargaJualGrosir" DECIMAL(65,30) NOT NULL,
    "qtyMinGrosir" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stok" (
    "id" SERIAL NOT NULL,
    "produkId" INTEGER NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "expiredDate" TIMESTAMP(3),
    "status" "StatusStok" NOT NULL DEFAULT 'Tersedia',

    CONSTRAINT "Stok_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penjualan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(65,30) NOT NULL,
    "kasirId" INTEGER NOT NULL,
    "metodeBayarId" INTEGER NOT NULL,

    CONSTRAINT "Penjualan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetodeBayar" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "MetodeBayar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PenjualanDetail" (
    "id" SERIAL NOT NULL,
    "penjualanId" INTEGER NOT NULL,
    "stokId" INTEGER NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,
    "tipe" "JenisPenjualan" NOT NULL,

    CONSTRAINT "PenjualanDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengguna" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Komisi" (
    "id" SERIAL NOT NULL,
    "penjualanDetailId" INTEGER NOT NULL,
    "kasirId" INTEGER NOT NULL,
    "jumlah" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Komisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaporanHarian" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "stokAwal" INTEGER NOT NULL,
    "stokAkhir" INTEGER NOT NULL,
    "totalPenjualan" DECIMAL(65,30) NOT NULL,
    "totalHPP" DECIMAL(65,30) NOT NULL,
    "totalLaba" DECIMAL(65,30) NOT NULL,
    "totalKomisi" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "LaporanHarian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suplier" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "kontak" TEXT,

    CONSTRAINT "Suplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pembelian" (
    "id" SERIAL NOT NULL,
    "suplierId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(65,30) NOT NULL,
    "status" "StatusPembelian" NOT NULL,

    CONSTRAINT "Pembelian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PembelianDetail" (
    "id" SERIAL NOT NULL,
    "pembelianId" INTEGER NOT NULL,
    "produkId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PembelianDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Piutang" (
    "id" SERIAL NOT NULL,
    "pembelianId" INTEGER NOT NULL,
    "jumlah" DECIMAL(65,30) NOT NULL,
    "tanggalJatuhTempo" TIMESTAMP(3) NOT NULL,
    "status" "StatusPiutang" NOT NULL,

    CONSTRAINT "Piutang_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_nama_key" ON "Kategori"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Stok_serialNumber_key" ON "Stok"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MetodeBayar_nama_key" ON "MetodeBayar"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_username_key" ON "Pengguna"("username");

-- CreateIndex
CREATE UNIQUE INDEX "LaporanHarian_tanggal_key" ON "LaporanHarian"("tanggal");

-- AddForeignKey
ALTER TABLE "Produk" ADD CONSTRAINT "Produk_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "Kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stok" ADD CONSTRAINT "Stok_produkId_fkey" FOREIGN KEY ("produkId") REFERENCES "Produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjualan" ADD CONSTRAINT "Penjualan_kasirId_fkey" FOREIGN KEY ("kasirId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjualan" ADD CONSTRAINT "Penjualan_metodeBayarId_fkey" FOREIGN KEY ("metodeBayarId") REFERENCES "MetodeBayar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PenjualanDetail" ADD CONSTRAINT "PenjualanDetail_penjualanId_fkey" FOREIGN KEY ("penjualanId") REFERENCES "Penjualan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PenjualanDetail" ADD CONSTRAINT "PenjualanDetail_stokId_fkey" FOREIGN KEY ("stokId") REFERENCES "Stok"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komisi" ADD CONSTRAINT "Komisi_penjualanDetailId_fkey" FOREIGN KEY ("penjualanDetailId") REFERENCES "PenjualanDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komisi" ADD CONSTRAINT "Komisi_kasirId_fkey" FOREIGN KEY ("kasirId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pembelian" ADD CONSTRAINT "Pembelian_suplierId_fkey" FOREIGN KEY ("suplierId") REFERENCES "Suplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PembelianDetail" ADD CONSTRAINT "PembelianDetail_pembelianId_fkey" FOREIGN KEY ("pembelianId") REFERENCES "Pembelian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PembelianDetail" ADD CONSTRAINT "PembelianDetail_produkId_fkey" FOREIGN KEY ("produkId") REFERENCES "Produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Piutang" ADD CONSTRAINT "Piutang_pembelianId_fkey" FOREIGN KEY ("pembelianId") REFERENCES "Pembelian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
