import { authenticateJWT } from "../../middleware/auth";
import express from 'express';
import { defineAbilities } from "../../middleware/defineAbilities";
import { validateRequest } from "../../middleware/validation";
import { addRoom, getRooms, getRoom, updateRoom, deleteRoom, getRoomsByStatus } from "./room.controller";
import { createRoomSchema, updateRoomSchema, roomParamsSchema } from "./room.validation";

const router = express.Router();

router.post('/add',
    authenticateJWT,
    defineAbilities,
    validateRequest({ body: createRoomSchema }),
    addRoom
);

router.get('/get/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: roomParamsSchema }),
    getRoom
);


router.get('/get',
    authenticateJWT,
    defineAbilities,
    getRooms
);


router.put('/update/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({
        params: roomParamsSchema,
        body: updateRoomSchema
    }),
    updateRoom
);

router.delete('/delete/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: roomParamsSchema }),
    deleteRoom
);

// Additional route for getting rooms by status
router.get('/get-rooms-by-status/:status',
    authenticateJWT,
    defineAbilities,
    getRoomsByStatus
);

export default router;