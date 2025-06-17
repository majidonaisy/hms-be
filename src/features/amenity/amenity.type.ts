export interface CreateAmenityParams {
    name: string;
    tenantId: string;
    hotelId: string;
}

export interface UpdateAmenityParams {
    id: string;
    name?: string;
    tenantId: string;
    hotelId: string;
}

export interface Amenity {
    id: string;
    name: string;
    tenantId: string;
    hotelId: string;
    createdAt: Date;
    updatedAt: Date;
}
