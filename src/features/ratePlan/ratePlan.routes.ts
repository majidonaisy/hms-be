
import express from 'express';
import { authenticateJWT } from '../../middleware/auth';
import { defineAbilities } from '../../middleware/defineAbilities';
import { validateRequest } from '../../middleware/validation';
import { addRatePlanSchema, ratePlanIdSchema, updateRatePlanSchema } from './ratePlan.validation';
import { addRatePlan, deleteRatePlan, getRatePlan, getRatePlans, updateRatePlan } from './ratePlan.controller';

const router=express.Router();

router.post('/add', authenticateJWT, defineAbilities, validateRequest({body:addRatePlanSchema}), addRatePlan);
router.get('/get', authenticateJWT, defineAbilities,getRatePlans);
router.get('/get/:id', authenticateJWT, defineAbilities, validateRequest({params:ratePlanIdSchema}),getRatePlan);
router.put('/update/:id',authenticateJWT, defineAbilities, validateRequest({params:ratePlanIdSchema,body:updateRatePlanSchema}), updateRatePlan);
router.delete('/delete/:id', authenticateJWT, defineAbilities,validateRequest({params:ratePlanIdSchema}),deleteRatePlan);
export default router;