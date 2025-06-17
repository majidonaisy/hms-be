import { authenticateJWT } from "../../middleware/auth";
import express from 'express';
import { defineAbilities } from "../../middleware/defineAbilities";
import { validateRequest } from "../../middleware/validation";
import { addAmenity, getAmenities, getAmenity, updateAmenity, deleteAmenity } from "./amenity.controller";
import { createAmenitySchema, updateAmenitySchema, amenityParamsSchema } from "./amenity.validation";

const router = express.Router();

router.post('/add',
    authenticateJWT,
    defineAbilities,
    validateRequest({ body: createAmenitySchema }),
    addAmenity
);

router.get('/get/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: amenityParamsSchema }),
    getAmenity
);

router.get('/get',
    authenticateJWT,
    defineAbilities,
    getAmenities
);

router.put('/update/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({
        params: amenityParamsSchema,
        body: updateAmenitySchema
    }),
    updateAmenity
);

router.delete('/delete/:id',
    authenticateJWT,
    defineAbilities,
    validateRequest({ params: amenityParamsSchema }),
    deleteAmenity
);

export default router;
