import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { errorHandler } from "../../utils/error";
export const AddUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password, firstName, lastName, roleId, hotelId, tenantId } = req.body;

        if (!email ||
            !password ||
            !firstName ||
            !lastName ||
            !roleId ||
            !hotelId ||
            !tenantId
        ) {
            return next(errorHandler(400, "All fields are required"));
        }
        const existingUser = await prisma.user.findUnique({
            where: { tenantId_email: { tenantId, email } }
        })
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
            data:newUser});
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

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (error) {
    next(errorHandler(500, "Internal server error"));
  }
};
