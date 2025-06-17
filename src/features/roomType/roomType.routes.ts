import { authenticateJWT } from "../../middleware/auth";
import express from 'express';
import { defineAbilities } from "../../middleware/defineAbilities";
import { validateRequest } from "../../middleware/validation";
import { addRoomType, getRoomTypes, getRoomType, updateRoomType, deleteRoomType } from "./roomType.controller";
import { createRoomTypeSchema, updateRoomTypeSchema, roomTypeParamsSchema } from "./roomType.validation";

const router = express.Router();

router.post('/add',
    authenticateJWT,
    defineAbilities,
    validateRequest({ body: createRoomTypeSchema }),
    addRoomType
);


router.get('/get/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: roomTypeParamsSchema }),
    getRoomType
);

router.get('/get',
    authenticateJWT,
    defineAbilities,
    getRoomTypes
);


router.put('/update/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({
        params: roomTypeParamsSchema,
        body: updateRoomTypeSchema
    }),
    updateRoomType
);

router.delete('/delete/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: roomTypeParamsSchema }),
    deleteRoomType
);

export default router;
