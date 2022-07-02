import { request, response } from "express"; // Importacion para tener tipado dentro de los controladores

// --- GET ---
export const getExample = (req = request, res = response) => {
    res.json({
        msg: 'GET'
    });
}

// --- POST ---
export const postExample = (req = request, res = response) => {

    const { nombre, email, password } = req.body;

    res.json({
        msg: 'POST',
        nombre,
        email,
        password
    });
}

// --- PUT ---
export const putExample = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'PUT',
        id
    });
}

// --- DELETE ---
export const deleteExample = (req = request, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'DELETE',
        id
    });
}
