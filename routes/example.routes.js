import express from 'express';
import { check } from 'express-validator';
import {
    deleteExample,
    getExample,
    postExample,
    putExample
} from '../controllers/example.controller.js';
import { capturarErrores } from '../middlewares/capturar-errores.js';

const router = express.Router();

router.get('/example', getExample);
router.post('/example', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es invalido').isEmail(),
    check('password', 'La password debe contener al menos 7 caracteres').isLength({ min: 7 }),
    capturarErrores
], postExample);
router.put('/example/:id', putExample);
router.delete('/example/:id', deleteExample);


export default router;