import express from 'express';
import { authenticateJWT } from '../../middleware/auth';

import { defineAbilities } from '../../middleware/defineAbilities';
import { validateRequest } from '../../middleware/validation';
import { addExchangeRateSchema, exchangeRateIdSchema, updateExchangeRateSchema } from './exchange.validation';
import { addExchangeRate, deleteExchangeRate, getExchangeRate, getExchangeRates, updateExchangeRate } from './exchange.controller';

const router=express.Router();
router.post('/add',
    authenticateJWT,
    defineAbilities,
    validateRequest({ body: addExchangeRateSchema }),
    addExchangeRate
);
router.get('/get',
    authenticateJWT,
    defineAbilities,
    getExchangeRates
);
router.get('/get/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: exchangeRateIdSchema }),
    getExchangeRate
);
router.put('/update/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({
        params: exchangeRateIdSchema,
        body: updateExchangeRateSchema
    }),
    updateExchangeRate
);
router.delete('/delete/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: exchangeRateIdSchema }),
    deleteExchangeRate
);
export default router;