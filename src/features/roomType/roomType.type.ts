export interface CreateRoomTypeParams {
  name: string;
  description?: string;
  baseRate: number;
  tenantId: string;
  hotelId: string;
}

export interface UpdateRoomTypeParams {
  id: string;
  name?: string;
  description?: string;
  baseRate?: number;
  tenantId: string;
  hotelId: string;
}
export interface RoomType {
  id: string;
  name: string;
  description?: string;
  baseRate: number; 
  tenantId: string;
  hotelId: string;
  createdAt: Date;
  updatedAt: Date;
}