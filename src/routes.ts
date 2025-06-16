import { Router } from "express";
import authRouter from "./features/auth/auth.routes";
import roomTypeRouter from "./features/roomType/roomType.routes";
import roomRouter from "./features/room/room.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/roomtype", roomTypeRouter);
router.use("/room", roomRouter);

export default router;