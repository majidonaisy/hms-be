import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../../utils/generateToken";
import { CreateUserParams } from "./auth.type";



export default class AuthService {
  constructor() {
    // You can initialize things here if needed
  }

  async createUser({
    email,
    password,
    firstName,
    lastName,
    roleId,
    tenantId,
    hotelId,
  }: CreateUserParams) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { tenantId_email: { tenantId, email } },
      });

      if (existingUser) {
        throw new Error("User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          passwordHash: hashedPassword,
          firstName,
          lastName,
          roleId,
          tenantId,
          hotelId,
        },
      });

      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user");
    }
  }

  async login(email: string, password: string) {
    if (!email || !password) {
      throw { status: 400, message: "Email and password are required" };
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

    if (!user) {
      throw { status: 401, message: "Invalid email or password" };
    }

    // Adjust password field name if different; your original code uses user.passwordHash
    const passwordHash = (user as any).passwordHash || (user as any).password;

    const validPassword = await bcrypt.compare(password, passwordHash);

    if (!validPassword) {
      throw { status: 401, message: "Invalid email or password" };
    }

    // Assuming you have these token generators defined somewhere
    const accessToken = generateAccessToken(user.id.toString(), user.tenantId, user.hotelId);
    const refreshToken = generateRefreshToken(user.id.toString(), user.tenantId, user.hotelId);

    return { user, accessToken, refreshToken };
  }
}
