import { authenticateJWT } from "../../middleware/auth";
import express from 'express';
import { defineAbilities } from "../../middleware/defineAbilities";
import { validateRequest } from "../../middleware/validation";
import { addRoomType, getRoomTypes, getRoomType, updateRoomType, deleteRoomType } from "./roomType.controller";
import { createRoomTypeSchema, updateRoomTypeSchema, roomTypeParamsSchema } from "./roomType.validation";

const router = express.Router();

router.post('/add-room-type',
    authenticateJWT,
    defineAbilities,
    validateRequest({ body: createRoomTypeSchema }),
    addRoomType
);

router.get('/get-room-types',
    authenticateJWT,
    defineAbilities,
    getRoomTypes
);

router.get('/get-room-type/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: roomTypeParamsSchema }),
    getRoomType
);

router.put('/update-room-type/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({
        params: roomTypeParamsSchema,
        body: updateRoomTypeSchema
    }),
    updateRoomType
);

router.delete('/delete-room-type/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: roomTypeParamsSchema }),
    deleteRoomType
);

export default router;
