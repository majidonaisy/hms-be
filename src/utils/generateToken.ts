import jwt from "jsonwebtoken";
export interface Payload {
    userId: string;
    role: string;
    organizationId?: string; // Optional, if needed
}

export const generateAccessToken = (userId: string,role:string,organizationId?:string): string => {
    const payload: Payload = { userId,role,organizationId};
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: '20m',
    });

    return accessToken;
};

export const generateRefreshToken = (userId: string,role:string,organizationId?:string): string => {
    const payload: Payload = { userId, role, organizationId} ;
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, {
        expiresIn: '7d',
    });

    return refreshToken;
};