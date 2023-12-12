// routes/indexRoute.js
import express from 'express';
import productRoutes from './productRoute.js';
import categoryRoutes from './categoryRoute.js';

const router = express.Router();

// Enlazar rutas de productos y categorías
router.get('/products',(req,res) => productRoutes(req,res));
router.get('/categories', (req,res) =>categoryRoutes(req,res));

export default router;
