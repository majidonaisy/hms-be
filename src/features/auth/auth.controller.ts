import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { errorHandler } from "../../utils/error";
import { generateAccessToken, generateRefreshToken } from "../../utils/generateToken";
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
    if(!req.ability?.can("create", "User")) {
        return next(errorHandler(403, "Forbidden: insufficient permissions"));
        }
        
    const { email, password, firstName, lastName, roleId } = req.body;

    if (!email || !password || !firstName || !lastName || !roleId) {
      return next(errorHandler(400, "All fields are required"));
    }

    const existingUser = await prisma.user.findUnique({
      where: { tenantId_email: { tenantId, email } }
    });

    if (existingUser) {
      return next(errorHandler(400, "User with this email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        firstName,
        lastName,
        roleId,
        hotelId,
        tenantId
      }
    });

    res.status(201).json({
      status: "200",
      message: "User created successfully",
      data: newUser
    });
  } catch (error) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const Login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    if ( !email || !password) {
        return next(errorHandler(400, "Email and password are required"));
    }

    const user = await prisma.user.findFirst({
    where: { email },
    include: {
        role: {
        include: {
            RolePermission: {
            include: {
                permission: true,
            },
            },
        },
        },
    },
    });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        return next(errorHandler(401, "Invalid email or password"));
    }
        const accessToken = generateAccessToken(user.id.toString(), user.tenantId, user.hotelId);
        const refreshToken = generateRefreshToken(user.id.toString(), user.tenantId, user.hotelId);

    res.json({ 
        status:200,
        message: "Login successful",
        data:{
            user,
            accessToken,
            refreshToken,
        } 
    });
  } catch (error) {
    console.error("Login error:", error);
    next(errorHandler(500, "Internal server error"));
  }
};
