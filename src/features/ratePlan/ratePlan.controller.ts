import { Request, Response, NextFunction } from "express";
import { errorHandler } from "../../utils/error";
import RatePlanService from "./ratePlan.service";

const ratePlanService = new RatePlanService();

export const addRatePlan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;

    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    if (!req.ability?.can("create", "RatePlan")) return next(errorHandler(403, "Forbidden"));

    const { code, name, baseAdjType, baseAdjVal, currencyId } = req.body;

    const newRatePlan = await ratePlanService.createRatePlan({
      code,
      name,
      baseAdjType,
      baseAdjVal,
      currencyId,
      tenantId,
      hotelId,
    });

    res.status(201).json({
      status: 201,
      message: "Rate plan created successfully",
      data: newRatePlan,
    });
  } catch (err) {
    console.error("Error creating rate plan:", err);
    next(errorHandler(500, "Internal server error"));
  }
};

export const getRatePlans = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;

    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    if (!req.ability?.can("read", "RatePlan")) return next(errorHandler(403, "Forbidden"));

    const plans = await ratePlanService.getRatePlans(tenantId, hotelId);

    res.json({
      status: 200,
      message: "Rate plans retrieved successfully",
      data: plans,
    });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const getRatePlan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const id = req.params.id;

    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    if (!req.ability?.can("read", "RatePlan")) return next(errorHandler(403, "Forbidden"));

    const plan = await ratePlanService.getRatePlan(id, tenantId, hotelId);
    if (!plan) return next(errorHandler(404, "Rate plan not found"));

    res.json({
      status: 200,
      message: "Rate plan retrieved successfully",
      data: plan,
    });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const updateRatePlan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const id = req.params.id;

    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    if (!req.ability?.can("update", "RatePlan")) return next(errorHandler(403, "Forbidden"));

    const { code,name, baseAdjType, baseAdjVal, currencyId, isActive } = req.body;

    const updatedPlan = await ratePlanService.updateRatePlan({
      id,
      code,
      name,
      baseAdjType,
      baseAdjVal,
      currencyId,
      isActive,
      tenantId,
      hotelId,
    });

    res.json({
      status: 200,
      message: "Rate plan updated successfully",
      data: updatedPlan,
    });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const deleteRatePlan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const id = req.params.id;

    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    if (!req.ability?.can("delete", "RatePlan")) return next(errorHandler(403, "Forbidden"));

    await ratePlanService.deleteRatePlan(id, tenantId, hotelId);

    res.json({
      status: 200,
      message: "Rate plan deleted successfully",
    });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};
