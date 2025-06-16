import { Request, Response, NextFunction } from "express";
import RoomTypeService from "./roomType.service";
import { errorHandler } from "../../utils/error";

const roomTypeService = new RoomTypeService();

export const addRoomType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;

    if (!tenantId || !hotelId) {
      return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    }

    if (!req.ability?.can("create", "RoomType")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const { name, description, baseRate } = req.body;

    const newRoomType = await roomTypeService.createRoomType({
      name,
      description,
      baseRate,
      tenantId,
      hotelId,
    });

    res.status(201).json({
      status: 200,
      message: "Room type created successfully",
      data: newRoomType,
    });
  } catch (error) {
    next(errorHandler(500, "Failed to create room type"));
  }
};

export const getRoomTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;

    if (!tenantId || !hotelId) {
      return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    }

    if (!req.ability?.can("read", "RoomType")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const roomTypes = await roomTypeService.getRoomTypes(tenantId, hotelId);

    res.json({
      status: 200,
      data: roomTypes,
    });
  } catch (error) {
    next(error);
  }
};

export const getRoomType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const { id } = req.params;

    if (!tenantId || !hotelId) {
      return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    }

    if (!req.ability?.can("read", "RoomType")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const roomType = await roomTypeService.getRoomType(id, tenantId, hotelId);

    res.json({
      status: 200,
      data: roomType,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRoomType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const { id } = req.params;

    if (!tenantId || !hotelId) {
      return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    }

    if (!req.ability?.can("update", "RoomType")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const { name, description, baseRate } = req.body;

    const updatedRoomType = await roomTypeService.updateRoomType({
      id,
      name,
      description,
      baseRate,
      tenantId,
      hotelId,
    });

    res.json({
      status: 200,
      message: "Room type updated successfully",
      data: updatedRoomType,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteRoomType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const { id } = req.params;

    if (!tenantId || !hotelId) {
      return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    }

    if (!req.ability?.can("delete", "RoomType")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const result = await roomTypeService.deleteRoomType(id, tenantId, hotelId);

    res.json({
      status: 200,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};
