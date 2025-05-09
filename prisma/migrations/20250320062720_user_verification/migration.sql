-- AlterTable
ALTER TABLE "Pengguna" ADD COLUMN     "verifikasi" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "role" SET DEFAULT 'Kasir';
