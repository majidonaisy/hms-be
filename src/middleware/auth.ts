
// src/middleware/auth.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AbilityTuple, MongoAbility } from "@casl/ability";
import { MongoQuery } from "@ucast/mongo";
import { User } from "../generated/prisma";
import { errorHandler } from "../utils/error";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

interface JwtPayload {
  userId: string;
  tenantId: string;
  hotelId: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      tenantId?: string;
      hotelId?: string;
      ability?: MongoAbility<AbilityTuple, MongoQuery>;
    }
  }
}

export async function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw errorHandler(401, "Authorization header is missing or invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.userId = payload.userId;
    req.tenantId = payload.tenantId;
    req.hotelId = payload.hotelId;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
}