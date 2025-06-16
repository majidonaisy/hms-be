import prisma from "../../lib/prisma";
import { CreateRoomTypeParams, UpdateRoomTypeParams } from "./roomType.type";

export default class RoomTypeService {
  async createRoomType({
    name,
    description,
    baseRate,
    tenantId,
    hotelId,
  }: CreateRoomTypeParams) {
    try {
      // Optionally check if a room type with the same name already exists in this tenant+hotel
      const existing = await prisma.roomType.findFirst({
        where: { name, tenantId, hotelId },
      });
      if (existing) {
        throw new Error("Room type with this name already exists");
      }

      const roomType = await prisma.roomType.create({
        data: {
          name,
          description,
          baseRate,
          tenantId,
          hotelId,
        },
      });

      return roomType;
    } catch (error) {
      console.error("Error creating room type:", error);
      throw new Error("Failed to create room type");
    }
  }

  async getRoomTypes(tenantId: string, hotelId: string){
    return prisma.roomType.findMany({
      where: { tenantId, hotelId },
      orderBy: { createdAt: "desc" },
    });
  }

  async getRoomType(id: string, tenantId: string, hotelId: string) {
    const roomType = await prisma.roomType.findFirst({
      where: { id, tenantId, hotelId },
    });

    if (!roomType) {
      throw new Error("Room type not found");
    }

    return roomType;
  }

  async updateRoomType({
    id,
    name,
    description,
    baseRate,
    tenantId,
    hotelId,
  }: UpdateRoomTypeParams) {
    // Check existence and ownership
    const roomType = await prisma.roomType.findFirst({
      where: { id, tenantId, hotelId },
    });

    if (!roomType) {
      throw new Error("Room type not found");
    }

    const updatedRoomType = await prisma.roomType.update({
      where: { id },
      data: {
        name,
        description,
        baseRate,
      },
    });

    return updatedRoomType;
  }

  async deleteRoomType(id: string, tenantId: string, hotelId: string) {
    const roomType = await prisma.roomType.findFirst({
      where: { id, tenantId, hotelId },
    });

    if (!roomType) {
      throw new Error("Room type not found");
    }

    await prisma.roomType.delete({
      where: { id },
    });

    return { message: "Room type deleted successfully" };
  }
}
