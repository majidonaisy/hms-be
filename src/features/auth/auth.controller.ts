import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
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
            res.status(400).json({ message: "All fields are required" });
            return;
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

        res.status(201).json(newUser);
    } catch (error) {
        console.error("AddUser error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const Login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    if ( !email || !password) {
      res.status(400).json({ message: "email, and password are required" });
      return;
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
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
