import { Router } from "express";
import authRouter from "./features/auth/auth.routes";
import roomTypeRouter from "./features/roomType/roomType.routes";
const router = Router();

router.use("/auth", authRouter);
router.use("/roomtype", roomTypeRouter);


export default router;