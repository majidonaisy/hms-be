import { Request, Response, NextFunction } from 'express';
import { defineAbilitiesForUser } from '../utils/ability';

export async function defineAbilities(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    req.ability = await defineAbilitiesForUser(userId);
    next();
  } catch (err) {
    next(err);
  }
}