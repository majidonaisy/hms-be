import { Request, Response, NextFunction } from "express";
import RoomService from "./room.service";
import { errorHandler } from "../../utils/error";

const roomService = new RoomService();

export const addRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("create", "Room")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const { roomNumber, status, roomTypeId } = req.body;

        const newRoom = await roomService.createRoom({
            roomNumber,
            status,
            roomTypeId,
            tenantId,
            hotelId,
        });

        res.status(201).json({
            status: 200,
            message: "Room created successfully",
            data: newRoom,
        });
    } catch (error) {
        next(error);
    }
};

export const getRooms = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Room")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const rooms = await roomService.getRooms(tenantId, hotelId);

        res.json({
            status: 200,
            data: rooms,
        });
    } catch (error) {
        next(error);
    }
};

export const getRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { id } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Room")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const room = await roomService.getRoom(id, tenantId, hotelId);

        res.json({
            status: 200,
            data: room,
        });
    } catch (error) {
        next(error);
    }
};

export const updateRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { id } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("update", "Room")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const { roomNumber, status, roomTypeId } = req.body;

        const updatedRoom = await roomService.updateRoom({
            id,
            roomNumber,
            status,
            roomTypeId,
            tenantId,
            hotelId,
        });

        res.json({
            status: 200,
            message: "Room updated successfully",
            data: updatedRoom,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { id } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("delete", "Room")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const result = await roomService.deleteRoom(id, tenantId, hotelId);

        res.json({
            status: 200,
            message: result.message,
        });
    } catch (error) {
        next(error);
    }
};

export const getRoomsByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tenantId = req.tenantId;
        const hotelId = req.hotelId;
        const { status } = req.params;

        if (!tenantId || !hotelId) {
            return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
        }

        if (!req.ability?.can("read", "Room")) {
            return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }

        const rooms = await roomService.getRoomsByStatus(status, tenantId, hotelId);

        res.json({
            status: 200,
            data: rooms,
        });
    } catch (error) {
        next(error);
    }
};