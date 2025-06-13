
import express from 'express';
import { AddUser, Login } from './auth.controller';

const router=express.Router();

// router.post('/signup',Signup);
router.post('/login',Login);
router.post('/add-user',AddUser);

export default router;