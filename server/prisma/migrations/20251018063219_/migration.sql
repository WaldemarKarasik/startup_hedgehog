/*
  Warnings:

  - You are about to drop the column `month` on the `RevenueReport` table. All the data in the column will be lost.
  - You are about to drop the column `monthNumber` on the `RevenueReport` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `RevenueReport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dealId,periodStart]` on the table `RevenueReport` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `signatures` on the `Contract` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `periodStart` to the `RevenueReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."RevenueReport_dealId_month_key";

-- DropIndex
DROP INDEX "public"."RevenueReport_month_idx";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "signatures",
ADD COLUMN     "signatures" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "RevenueReport" DROP COLUMN "month",
DROP COLUMN "monthNumber",
DROP COLUMN "year",
ADD COLUMN     "periodEnd" TIMESTAMP(3),
ADD COLUMN     "periodStart" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "amount" SET DEFAULT 0.00,
ALTER COLUMN "platformFee" SET DEFAULT 0.00,
ALTER COLUMN "developerAmount" SET DEFAULT 0.00;

-- CreateIndex
CREATE UNIQUE INDEX "RevenueReport_dealId_periodStart_key" ON "RevenueReport"("dealId", "periodStart");
