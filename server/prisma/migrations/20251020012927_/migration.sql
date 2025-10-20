/*
  Warnings:

  - Added the required column `customizationPrice` to the `DeveloperApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DeveloperApplication" ADD COLUMN     "customizationPrice" INTEGER NOT NULL;
