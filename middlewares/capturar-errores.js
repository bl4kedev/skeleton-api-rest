import { request, response } from 'express';
import { validationResult } from 'express-validator';

export const capturarErrores = (req = request, res = response, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.json(errores);
    }

    next();
}

// Muestra los errores de validacion capturados por express-validator 