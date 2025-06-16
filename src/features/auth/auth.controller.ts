import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { errorHandler } from "../../utils/error";
import { generateAccessToken, generateRefreshToken } from "../../utils/generateToken";
import AuthService from "./auth.service";

const authService = new AuthService();

export const AddUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.userId) {
      return next(errorHandler(401, "Unauthorized access"));
    }
    const tenantId = req.tenantId;
    const hotelId = req.hotelId;
    if (!tenantId || !hotelId) {
      return next(errorHandler(400, "Tenant ID and Hotel ID are required"));
    }
    if (!req.ability?.can("create", "User")) {
      return next(errorHandler(403, "Forbidden: insufficient permissions"));
    }

    const { email, password, firstName, lastName, roleId } = req.body;

    const newUser = await authService.createUser({
      email,
      password,
      firstName,
      lastName,
      roleId,
      tenantId,
      hotelId,
    });

    res.status(201).json({
      status: "200",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
export const loginController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const { user, accessToken, refreshToken } = await authService.login(email, password);

    res.json({
      status: 200,
      message: "Login successful",
      data: {
        user,
        accessToken,
        refreshToken,
      },
    });
  } catch (error: any) {
    next(errorHandler(error.status || 500, error.message || "Internal server error"));
  }
};