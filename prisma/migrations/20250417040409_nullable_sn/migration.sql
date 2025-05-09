/*
  Warnings:

  - The values [Expired] on the enum `StatusStok` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StatusStok_new" AS ENUM ('Tersedia', 'Terjual', 'Kadaluarsa', 'Retur', 'Rusak');
ALTER TABLE "Stok" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Stok" ALTER COLUMN "status" TYPE "StatusStok_new" USING ("status"::text::"StatusStok_new");
ALTER TYPE "StatusStok" RENAME TO "StatusStok_old";
ALTER TYPE "StatusStok_new" RENAME TO "StatusStok";
DROP TYPE "StatusStok_old";
ALTER TABLE "Stok" ALTER COLUMN "status" SET DEFAULT 'Tersedia';
COMMIT;

-- AlterTable
ALTER TABLE "Stok" ALTER COLUMN "serialNumber" DROP NOT NULL;
