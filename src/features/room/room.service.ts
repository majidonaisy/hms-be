import { RoomStatus } from "../../generated/prisma";
import prisma from "../../lib/prisma";
import { CreateRoomParams, UpdateRoomParams } from "./room.types";

export default class RoomService {
    async createRoom({
        roomNumber,
        roomTypeId,
        tenantId,
        hotelId,
    }: CreateRoomParams) {
        try {
            // Check if a room with the same number already exists in this tenant+hotel
            const existing = await prisma.room.findUnique({
                where: {
                    tenantId_hotelId_roomNumber: {
                        tenantId,
                        hotelId,
                        roomNumber
                    }
                },
            });

            if (existing) {
                throw new Error("Room with this number already exists");
            }

            // Verify that the room type exists and belongs to the same tenant+hotel
            const roomType = await prisma.roomType.findFirst({
                where: { id: roomTypeId, tenantId, hotelId },
            });

            if (!roomType) {
                throw new Error("Invalid room type ID");
            }

            const room = await prisma.room.create({
                data: {
                    roomNumber,
                    status:RoomStatus.AVAILABLE,
                    roomTypeId,
                    tenantId,
                    hotelId,
                },
                include: {
                    roomType: true,
                },
            });

            return room;
        } catch (error) {
            console.error("Error creating room:", error);
            throw new Error("Failed to create room");
        }
    }

    async getRooms(tenantId: string, hotelId: string) {
        return prisma.room.findMany({
            where: { tenantId, hotelId },
            include: {
                roomType: true,
            },
            orderBy: { roomNumber: "asc" },
        });
    }

    async getRoom(id: string, tenantId: string, hotelId: string) {
        const room = await prisma.room.findFirst({
            where: { id, tenantId, hotelId },
            include: {
                roomType: true,
                Reservation: {
                    where: {
                        status: {
                            in: ["CONFIRMED", "CHECKED_IN", "HELD"]
                        }
                    },
                    include: {
                        guest: true,
                    },
                },
            },
        });

        if (!room) {
            throw new Error("Room not found");
        }

        return room;
    }

    async updateRoom({
        id,
        roomNumber,
        status,
        roomTypeId,
        tenantId,
        hotelId,
    }: UpdateRoomParams) {
        // Check existence and ownership
        const room = await prisma.room.findFirst({
            where: { id, tenantId, hotelId },
        });

        if (!room) {
            throw new Error("Room not found");
        }

        // If roomNumber is being updated, check for duplicates
        if (roomNumber && roomNumber !== room.roomNumber) {
            const existing = await prisma.room.findUnique({
                where: {
                    tenantId_hotelId_roomNumber: {
                        tenantId,
                        hotelId,
                        roomNumber
                    }
                },
            });

            if (existing) {
                throw new Error("Room with this number already exists");
            }
        }

        // If roomTypeId is being updated, verify it exists
        if (roomTypeId && roomTypeId !== room.roomTypeId) {
            const roomType = await prisma.roomType.findFirst({
                where: { id: roomTypeId, tenantId, hotelId },
            });

            if (!roomType) {
                throw new Error("Invalid room type ID");
            }
        }

        const updatedRoom = await prisma.room.update({
            where: { id },
            data: {
                ...(roomNumber && { roomNumber }),
                ...(status && { status }),
                ...(roomTypeId && { roomTypeId }),
            },
            include: {
                roomType: true,
            },
        });

        return updatedRoom;
    }

    async deleteRoom(id: string, tenantId: string, hotelId: string) {
        const room = await prisma.room.findFirst({
            where: { id, tenantId, hotelId },
            include: {
                Reservation: {
                    where: {
                        status: {
                            in: ["CONFIRMED", "CHECKED_IN", "HELD"]
                        }
                    }
                }
            }
        });

        if (!room) {
            throw new Error("Room not found");
        }

        // Check if room has active reservations
        if (room.Reservation && room.Reservation.length > 0) {
            throw new Error("Cannot delete room with active reservations");
        }

        await prisma.room.delete({
            where: { id },
        });

        return { message: "Room deleted successfully" };
    }

    // Additional method to get rooms by status
    async getRoomsByStatus(status: string, tenantId: string, hotelId: string) {
        return prisma.room.findMany({
            where: {
                status: status as any,
                tenantId,
                hotelId
            },
            include: {
                roomType: true,
            },
            orderBy: { roomNumber: "asc" },
        });
    }
}