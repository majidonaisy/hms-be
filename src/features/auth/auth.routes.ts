
import express from 'express';
import { AddUser, loginController } from './auth.controller';
import { authenticateJWT } from '../../middleware/auth';
import { defineAbilities } from '../../middleware/defineAbilities';
import { validateRequest } from '../../middleware/validation';
import { createUserSchema, loginSchema } from './auth.validation';

const router=express.Router();

// router.post('/signup',Signup);
router.post('/login',validateRequest({body:loginSchema}), loginController);
router.post('/add',authenticateJWT, validateRequest({body:createUserSchema}) ,defineAbilities,AddUser);

export default router;