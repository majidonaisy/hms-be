import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../utils/error";
import GuestService from "./guest.service";

const guestService =new GuestService();

export const addGuest=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("create", "Guest")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const { firstName, lastName, email, phoneNumber } = req.body;

        // Assuming guestService is defined and has a method to create a guest
        const newGuest = await guestService.createGuest({
            firstName,
            lastName,
            email,
            phoneNumber,
            tenantId,
            hotelId,
        });

        res.status(201).json({
            status: 200,
            message: "Guest created successfully",
            data: newGuest,
        });
    } catch (error) {
        next(errorHandler(500,'Internal server error'));
    }
}
export const getGuests = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Guest")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        // Assuming guestService is defined and has a method to get guests
        const guests = await guestService.getGuests(tenantId, hotelId);

        res.json({
            status: 200,
            message: "Guests retrieved successfully",
            data: guests,
        });
    } catch (error) {
        next(errorHandler(500,'Internal server error'));
    }
}
export const getGuest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const id = req.params.id;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Guest")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        // Assuming guestService is defined and has a method to get a guest by ID
        const guest = await guestService.getGuest(id, tenantId, hotelId);

        if (!guest) {
            return next(errorHandler(404, "Guest not found"));
        }

        res.json({
            status: 200,
            message: "Guest retrieved successfully",
            data: guest,
        });
    } catch (error) {
        next(errorHandler(500,'Internal server error'));
    }
}
export const updateGuest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const id = req.params.id;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("update", "Guest")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const { firstName, lastName, email, phoneNumber } = req.body;

        const updatedGuest = await guestService.updateGuest({
            id,
            firstName,
            lastName,
            email,
            phoneNumber,
            tenantId,
            hotelId,
        });

        res.json({
            status: 200,
            message: "Guest updated successfully",
            data: updatedGuest,
        });
    } catch (error) {
        next(errorHandler(500,'Internal server error'));
    }
}
export const deleteGuest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const id = req.params.id;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("delete", "Guest")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        // Assuming guestService is defined and has a method to delete a guest
        await guestService.deleteGuest(id, tenantId, hotelId);

        res.json({
            status: 200,
            message: "Guest deleted successfully",
        });
    } catch (error) {
        next(errorHandler(500,'Internal server error'));
    }
}