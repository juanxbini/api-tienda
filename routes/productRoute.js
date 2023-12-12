
import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

// Definir rutas para productos
router.get('/', (req,res) => productController.getAllProducts(req,res));
router.get('/:id', (req,res) => productController.getProductById(req,res));
// ... otras rutas para productos

export default router;
