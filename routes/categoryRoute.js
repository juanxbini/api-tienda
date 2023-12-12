
import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();
const categoryController = new CategoryController();

// Definir rutas para categorías
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
// ... otras rutas para categorías

export default router;
