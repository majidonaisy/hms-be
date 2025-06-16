export interface CreateGuestParams {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  tenantId: string;
  hotelId: string;
}

export interface UpdateGuestParams {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string | null;
  phoneNumber?: string | null;
  tenantId: string;
  hotelId: string;
}

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  phoneNumber?: string | null;
  tenantId: string;
  hotelId: string;
  createdAt: Date;
  updatedAt: Date;
}