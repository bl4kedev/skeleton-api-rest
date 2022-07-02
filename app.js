import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import exampleRoutes from './routes/example.routes.js';
import conectarDB from './config/db.js';

const app = express();

conectarDB();

// Middlewares necesarios
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Definir las Rutas
app.use('/api', exampleRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});