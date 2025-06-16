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
        throw { statusCode: 400, message: "User already exists" };
      }

      // Verify that the tenant exists
      const tenant = await prisma.tenant.findUnique({
        where: { id: tenantId },
      });

      if (!tenant) {
        throw { statusCode: 400, message: "Invalid tenant ID" };
      }

      // Verify that the hotel exists and belongs to the tenant
      const hotel = await prisma.hotel.findFirst({
        where: { id: hotelId, tenantId },
      });

      if (!hotel) {
        throw { statusCode: 400, message: "Invalid hotel ID" };
      }

      // Verify that the role exists and belongs to the tenant
      const role = await prisma.role.findFirst({
        where: { id: roleId, tenantId },
      });

      if (!role) {
        throw { statusCode: 400, message: "Invalid role ID" };
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
        include: {
          role: true,
          tenant: true,
          hotel: true,
        },
      });

      // Remove sensitive data before returning
      const { passwordHash, ...userWithoutPassword } = newUser;
      return userWithoutPassword;
    } catch (error: any) {
      console.error("Error creating user:", error);

      // If it's already a custom error object, throw it as is
      if (error.statusCode) {
        throw error;
      }

      // Otherwise, throw a generic error
      throw { statusCode: 500, message: "Failed to create user" };
    }
  }

  async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw { statusCode: 400, message: "Email and password are required" };
      }

      const user = await prisma.user.findFirst({
        where: { email },
        include: {
          role: {
            include: {
              permissions: true,
            },
          },
        },
      });

      if (!user) {
        throw { statusCode: 401, message: "Invalid email or password" };
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
      if (!isPasswordValid) {
        throw { statusCode: 401, message: "Invalid email or password" };
      }

      const accessToken = generateAccessToken(user.id, user.tenantId, user.hotelId);
      const refreshToken = generateRefreshToken(user.id, user.tenantId, user.hotelId);

      // Remove sensitive data before returning
      const { passwordHash, ...userWithoutPassword } = user;

      return { user: userWithoutPassword, accessToken, refreshToken };
    } catch (error: any) {
      console.error("Error during login:", error);

      // If it's already a custom error object, throw it as is
      if (error.statusCode) {
        throw error;
      }

      // Otherwise, throw a generic error
      throw { statusCode: 500, message: "Login failed" };
    }
  }
}
