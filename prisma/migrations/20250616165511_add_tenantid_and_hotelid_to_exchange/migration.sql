/*
  Warnings:

  - Added the required column `hotelId` to the `ExchangeRate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `ExchangeRate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExchangeRate" ADD COLUMN     "hotelId" TEXT NOT NULL,
ADD COLUMN     "tenantId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ExchangeRate" ADD CONSTRAINT "ExchangeRate_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExchangeRate" ADD CONSTRAINT "ExchangeRate_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
