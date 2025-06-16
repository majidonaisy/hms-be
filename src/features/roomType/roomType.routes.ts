import { authenticateJWT } from "../../middleware/auth";
import express from 'express';
import { defineAbilities } from "../../middleware/defineAbilities";
import { addRoomType, getRoomTypes, getRoomType, updateRoomType, deleteRoomType } from "./roomType.controller";
const router= express.Router();

router.post('/add-room-type', authenticateJWT, defineAbilities, addRoomType);
router.get('/get-room-types', authenticateJWT, defineAbilities, getRoomTypes);
router.get('/get-room-type/:id', authenticateJWT, defineAbilities, getRoomType);
router.put('/update-room-type/:id', authenticateJWT, defineAbilities, updateRoomType);
router.delete('/delete-room-type/:id', authenticateJWT, defineAbilities, deleteRoomType);

export default router;
