/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Pengguna` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Pengguna` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengguna" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_email_key" ON "Pengguna"("email");
