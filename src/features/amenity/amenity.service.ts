import prisma from "../../lib/prisma";
import { CreateAmenityParams, UpdateAmenityParams } from "./amenity.type";

export default class AmenityService {
    async createAmenity({
        name,
        tenantId,
        hotelId,
    }: CreateAmenityParams) {
        try {
            // Check if an amenity with the same name already exists in this tenant+hotel
            const existing = await prisma.amenity.findFirst({
                where: { name, tenantId, hotelId },
            });
            if (existing) {
                throw new Error("Amenity with this name already exists");
            }

            const amenity = await prisma.amenity.create({
                data: {
                    name,
                    tenantId,
                    hotelId,
                },
            });

            return amenity;
        } catch (error) {
            console.error("Error creating amenity:", error);
            throw new Error("Failed to create amenity");
        }
    }

    async getAmenities(tenantId: string, hotelId: string) {
        return prisma.amenity.findMany({
            where: { tenantId, hotelId },
            orderBy: { createdAt: "desc" },
        });
    }

    async getAmenity(id: string, tenantId: string, hotelId: string) {
        const amenity = await prisma.amenity.findFirst({
            where: { id, tenantId, hotelId },
        });

        if (!amenity) {
            throw new Error("Amenity not found");
        }

        return amenity;
    }

    async updateAmenity({
        id,
        name,
        tenantId,
        hotelId,
    }: UpdateAmenityParams) {
        // Check existence and ownership
        const amenity = await prisma.amenity.findFirst({
            where: { id, tenantId, hotelId },
        });

        if (!amenity) {
            throw new Error("Amenity not found");
        }

        // Check for duplicate name if name is being updated
        if (name && name !== amenity.name) {
            const existing = await prisma.amenity.findFirst({
                where: { name, tenantId, hotelId },
            });
            if (existing) {
                throw new Error("Amenity with this name already exists");
            }
        }

        const updatedAmenity = await prisma.amenity.update({
            where: { id },
            data: {
                name,
            },
        });

        return updatedAmenity;
    }

    async deleteAmenity(id: string, tenantId: string, hotelId: string) {
        const amenity = await prisma.amenity.findFirst({
            where: { id, tenantId, hotelId },
        });

        if (!amenity) {
            throw new Error("Amenity not found");
        }

        await prisma.amenity.delete({
            where: { id },
        });

        return { message: "Amenity deleted successfully" };
    }
}
