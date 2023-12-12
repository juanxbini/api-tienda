// routes/indexRoute.js
import express from 'express';
import productRoutes from './productRoute.js';
import categoryRoutes from './categoryRoute.js';

const router = express.Router();

// Enlazar rutas de productos y categorías
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

export default router;
