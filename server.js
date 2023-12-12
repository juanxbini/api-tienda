import express from 'express';
import cors from 'cors';
import indexRoute from './routes/indexRoute.js';

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Configuración básica para permitir solicitudes desde cualquier origen
app.use(express.json()); // Permite parsear solicitudes con formato JSON

// Rutas
app.use('/api', indexRoute);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
