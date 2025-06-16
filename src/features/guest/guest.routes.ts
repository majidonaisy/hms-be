
import express from 'express';
import { addGuest, getGuests,getGuest,updateGuest,deleteGuest } from './guest.controller';
import { authenticateJWT } from '../../middleware/auth';
import { defineAbilities } from '../../middleware/defineAbilities';
import { validateRequest } from '../../middleware/validation';
import { addGuestSchema, guestIdSchema, updateGuestSchema } from './guest.validation';

const router=express.Router();

router.post('/add-guest', authenticateJWT, defineAbilities, validateRequest({body:addGuestSchema}), addGuest);
router.get('/get-guests', authenticateJWT, defineAbilities,getGuests);
router.get('/get-guest/:id', authenticateJWT, defineAbilities, validateRequest({params:guestIdSchema}),getGuest);
router.put('/update-guest/:id',authenticateJWT, defineAbilities, validateRequest({params:guestIdSchema,body:updateGuestSchema}), updateGuest);
router.delete('/delete-guest/:id', authenticateJWT, defineAbilities,validateRequest({params:guestIdSchema}),deleteGuest);
export default router;