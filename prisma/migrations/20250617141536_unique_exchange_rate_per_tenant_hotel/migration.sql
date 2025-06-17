/*
  Warnings:

  - A unique constraint covering the columns `[baseCurrency,targetCurrency,tenantId,hotelId]` on the table `ExchangeRate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ExchangeRate_baseCurrency_targetCurrency_key";

-- CreateIndex
CREATE UNIQUE INDEX "ExchangeRate_baseCurrency_targetCurrency_tenantId_hotelId_key" ON "ExchangeRate"("baseCurrency", "targetCurrency", "tenantId", "hotelId");
