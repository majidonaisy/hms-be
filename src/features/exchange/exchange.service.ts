import prisma from "../../lib/prisma";
import { CreateExchangeRateParams, UpdateExchangeRateParams } from "./exchange.type";

export default class ExchangeRateService {
  async createExchangeRate({
    baseCurrency,
    targetCurrency,
    rate,
    tenantId,
    hotelId,
  }: CreateExchangeRateParams) {
    try {
      const exchangeRate = await prisma.exchangeRate.create({
        data: {
          baseCurrency,
          targetCurrency,
          rate,
          tenantId,
          hotelId,
        },
      });
      return exchangeRate;
    } catch (error) {
      console.error("Error creating exchange rate:", error);
      throw new Error("Failed to create exchange rate");
    }
  }

  async getExchangeRates(tenantId: string, hotelId: string) {
    return prisma.exchangeRate.findMany({
      where: { tenantId, hotelId },
      orderBy: { createdAt: "desc" },
    });
  }

  async getExchangeRate(id: string, tenantId: string, hotelId: string) {
    const rate = await prisma.exchangeRate.findFirst({
      where: { id, tenantId, hotelId },
    });

    if (!rate) throw new Error("Exchange rate not found");
    return rate;
  }

  async updateExchangeRate({
    id,
    baseCurrency,
    targetCurrency,
    rate,
    tenantId,
    hotelId,
  }: UpdateExchangeRateParams) {
    const existing = await prisma.exchangeRate.findFirst({
      where: { id, tenantId, hotelId },
    });

    if (!existing) throw new Error("Exchange rate not found");

    return prisma.exchangeRate.update({
      where: { id },
      data: {
        baseCurrency,
        targetCurrency,
        rate,
      },
    });
  }

  async deleteExchangeRate(id: string, tenantId: string, hotelId: string) {
    const existing = await prisma.exchangeRate.findFirst({
      where: { id, tenantId, hotelId },
    });

    if (!existing) throw new Error("Exchange rate not found");

    await prisma.exchangeRate.delete({ where: { id } });
    return { message: "Exchange rate deleted successfully" };
  }
}
