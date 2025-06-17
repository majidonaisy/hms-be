import { Router } from "express";
import authRouter from "./features/auth/auth.routes";
import guestRouter from "./features/guest/guest.routes";
import roomTypeRouter from "./features/roomType/roomType.routes";
import roomRouter from "./features/room/room.routes";
import ratePlanRouter from "./features/ratePlan/ratePlan.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/roomtype", roomTypeRouter);

router.use("/room", roomRouter);


router.use("/guest", guestRouter);
router.use("/ratePlan", ratePlanRouter);


export default router;