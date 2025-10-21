/*
  Warnings:

  - You are about to drop the column `criticalSLA` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `fixedPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `fullDescription` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `normalSLA` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Product` table. All the data in the column will be lost.
  - Added the required column `customizationPrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "ProductCategory" ADD VALUE 'BOT';

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "criticalSLA",
DROP COLUMN "fixedPrice",
DROP COLUMN "fullDescription",
DROP COLUMN "normalSLA",
DROP COLUMN "version",
ADD COLUMN     "customizationPrice" DECIMAL(10,2) NOT NULL;
