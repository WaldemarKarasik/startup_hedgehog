/*
  Warnings:

  - You are about to drop the column `email` on the `DeveloperApplication` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `DeveloperApplication` table. All the data in the column will be lost.
  - You are about to drop the column `customizationPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `exclusivityPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `includesTraining` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `mrr` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `userCount` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `DeveloperApplication` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `DeveloperApplication` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."DeveloperApplication_email_idx";

-- AlterTable
ALTER TABLE "DeveloperApplication" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "customizationPrice",
DROP COLUMN "exclusivityPrice",
DROP COLUMN "includesTraining",
DROP COLUMN "mrr",
DROP COLUMN "userCount";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'BUYER';

-- CreateIndex
CREATE UNIQUE INDEX "DeveloperApplication_userId_key" ON "DeveloperApplication"("userId");

-- AddForeignKey
ALTER TABLE "DeveloperApplication" ADD CONSTRAINT "DeveloperApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
