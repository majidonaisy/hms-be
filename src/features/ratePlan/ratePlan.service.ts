import prisma from "../../lib/prisma";
import { CreateRatePlanParams, UpdateRatePlanParams } from "./ratePlan.type";

export default class RatePlanService {
  async createRatePlan({
    code,
    name,
    baseAdjType,
    baseAdjVal,
    currencyId,
    tenantId,
    hotelId,
  }: CreateRatePlanParams) {
    try {
        
      const ratePlan = await prisma.ratePlan.create({
        data: {
          code,
          name,
          baseAdjType,
          baseAdjVal,
          currencyId,
          tenantId,
          hotelId,
        },
      });

      return ratePlan;
    } catch (error) {
      console.error("Error creating rate plan:", error);
      throw new Error("Failed to create rate plan");
    }
  }



  async getRatePlans(tenantId: string, hotelId: string) {
    return await prisma.ratePlan.findMany({
      where: { tenantId, hotelId },
      orderBy: { createdAt: "desc" },
    });
  }

  async getRatePlan(id: string, tenantId: string, hotelId: string) {
    return await prisma.ratePlan.findFirst({
      where: { id, tenantId, hotelId },
    });
  }

  async updateRatePlan({
    id,
    code,
    name,
    baseAdjType,
    baseAdjVal,
    currencyId,
    isActive,
    tenantId,
    hotelId,
  }: UpdateRatePlanParams) {

    const plan = await prisma.ratePlan.findFirst({ where: { id, tenantId, hotelId } });
    if (!plan) throw new Error("Rate plan not found");

    const updatedRatePlan = await prisma.ratePlan.update({
      where: { id },
      data: {
    code,
    name,
    baseAdjType,
    baseAdjVal,
    currencyId,
    tenantId,
    hotelId,
      },
    });
    return updatedRatePlan;
  }

  async deleteRatePlan(id: string, tenantId: string, hotelId: string) {
    const plan = await prisma.ratePlan.findFirst({ where: { id, tenantId, hotelId } });
    if (!plan) throw new Error("Rate plan not found");

    await prisma.ratePlan.delete({ where: { id } });
    return { message: "Deleted successfully" };
  }
}
