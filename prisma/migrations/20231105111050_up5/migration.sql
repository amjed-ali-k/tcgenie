/*
  Warnings:

  - You are about to drop the column `parant_address` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `parant_name` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "parant_address",
DROP COLUMN "parant_name",
ADD COLUMN     "parent_address" TEXT,
ADD COLUMN     "parent_name" TEXT;
