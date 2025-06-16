import z from "zod";

// Schema for creating a room type
export const createRoomTypeSchema = z.object({
  name: z.string().min(1, "Room type name is required"),
  description: z.string().optional(),
  baseRate: z.number().positive("Base rate must be a positive number")
});

// Schema for updating a room type (all fields optional)
export const updateRoomTypeSchema = z.object({
  name: z.string().min(1, "Room type name is required").optional(),
  description: z.string().optional(),
  baseRate: z.number().positive("Base rate must be a positive number").optional()
});

// Schema for room type ID parameter
export const roomTypeParamsSchema = z.object({
  id: z.string().min(1, "Room type ID is required")
});

// Type inference for TypeScript
export type CreateRoomTypeInput = z.infer<typeof createRoomTypeSchema>;
export type UpdateRoomTypeInput = z.infer<typeof updateRoomTypeSchema>;
export type RoomTypeParamsInput = z.infer<typeof roomTypeParamsSchema>;