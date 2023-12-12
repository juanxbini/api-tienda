
import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();
const productController = new ProductController();

// Definir rutas para productos
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
// ... otras rutas para productos

export default router;
