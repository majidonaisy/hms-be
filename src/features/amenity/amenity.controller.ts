import { Request, Response, NextFunction } from "express";
import AmenityService from "./amenity.service";
import { errorHandler } from "../../utils/error";

const amenityService = new AmenityService();

export const addAmenity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("create", "Amenity")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const { name } = req.body;

        const newAmenity = await amenityService.createAmenity({
            name,
            tenantId,
            hotelId,
        });

        res.status(201).json({
            status: 200,
            message: "Amenity created successfully",
            data: newAmenity,
        });
    } catch (error) {
        next(errorHandler(500, "Failed to create amenity"));
    }
};

export const getAmenities = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Amenity")) {
            console.log("Ability : ", req.ability)
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const amenities = await amenityService.getAmenities(tenantId, hotelId);

        res.json({
            status: 200,
            data: amenities,
        });
    } catch (error) {
        next(error);
    }
};

export const getAmenity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { id } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Amenity")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const amenity = await amenityService.getAmenity(id, tenantId, hotelId);

        res.json({
            status: 200,
            data: amenity,
        });
    } catch (error) {
        next(error);
    }
};

export const updateAmenity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { id } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("update", "Amenity")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const { name } = req.body;

        const updatedAmenity = await amenityService.updateAmenity({
            id,
            name,
            tenantId,
            hotelId,
        });

        res.json({
            status: 200,
            message: "Amenity updated successfully",
            data: updatedAmenity,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteAmenity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { id } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("delete", "Amenity")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const result = await amenityService.deleteAmenity(id, tenantId, hotelId);

        res.json({
            status: 200,
            message: result.message,
        });
    } catch (error) {
        next(error);
    }
};
