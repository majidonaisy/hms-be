import { Request, Response, NextFunction } from "express";
import ExchangeRateService from "./exchange.service";
import { errorHandler } from "../../utils/error";

const service = new ExchangeRateService();

export const addExchangeRate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));

    if (!req.ability?.can("create", "ExchangeRate")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const { baseCurrency, targetCurrency, rate } = req.body;
    const result = await service.createExchangeRate({ baseCurrency, targetCurrency, rate, tenantId, hotelId });

    res.status(201).json({ status: 200, message: "Exchange rate created successfully", data: result });
  } catch (err) {
    console.error("Error creating exchange rate:", err);
    next(errorHandler(500, "Internal server error"));
  }
};

export const getExchangeRates = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));

    if (!req.ability?.can("read", "ExchangeRate")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const data = await service.getExchangeRates(tenantId, hotelId);
    res.json({ status: 200, message: "Exchange rates retrieved successfully", data });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const getExchangeRate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const id = req.params.id;
    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));

    if (!req.ability?.can("read", "ExchangeRate")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const rate = await service.getExchangeRate(id, tenantId, hotelId);
    res.json({ status: 200, message: "Exchange rate retrieved successfully", data: rate });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const updateExchangeRate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const id = req.params.id;
    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));

    if (!req.ability?.can("update", "ExchangeRate")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const { baseCurrency, targetCurrency, rate } = req.body;
    const updated = await service.updateExchangeRate({
      id,
      baseCurrency,
      targetCurrency,
      rate,
      tenantId,
      hotelId,
    });

    res.json({ status: 200, message: "Exchange rate updated successfully", data: updated });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const deleteExchangeRate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    const id = req.params.id;
    if (!tenantId || !hotelId) return next(errorHandler(400, "Tenant ID and Hotel ID are required"));

    if (!req.ability?.can("delete", "ExchangeRate")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    await service.deleteExchangeRate(id, tenantId, hotelId);
    res.json({ status: 200, message: "Exchange rate deleted successfully" });
  } catch (err) {
    next(errorHandler(500, "Internal server error"));
  }
};
