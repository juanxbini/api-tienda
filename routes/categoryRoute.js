
import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();
const categoryController = new CategoryController();

// Definir rutas para categorías
router.get('/', (req,res) => categoryController.getAllCategories(req,res));
router.get('/:id', (req,res) => categoryController.getCategoryById(req,res));
// ... otras rutas para categorías

export default router;
