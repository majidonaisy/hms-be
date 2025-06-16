
import express from 'express';
import { AddUser, loginController } from './auth.controller';
import { authenticateJWT } from '../../middleware/auth';
import { defineAbilities } from '../../middleware/defineAbilities';

const router=express.Router();

// router.post('/signup',Signup);
router.post('/login',loginController);
router.post('/add-user',authenticateJWT, defineAbilities,AddUser);

export default router;