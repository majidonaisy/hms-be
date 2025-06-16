import { RoomStatus } from "../../generated/prisma";

export interface CreateRoomParams {
  roomNumber: string;
  status?: RoomStatus;
  roomTypeId: string;
  tenantId: string;
  hotelId: string;
}

export interface UpdateRoomParams {
  id: string;
  roomNumber?: string;
  status?: RoomStatus;
  roomTypeId?: string;
  tenantId: string;
  hotelId: string;
}