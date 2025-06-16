import { Router } from "express";
import authRouter from "./features/auth/auth.routes";
import guestRouter from "./features/guest/guest.routes";
import roomTypeRouter from "./features/roomType/roomType.routes";
const router = Router();

router.use("/auth", authRouter);
router.use("/roomtype", roomTypeRouter);

router.use("/guest", guestRouter);



export default router;