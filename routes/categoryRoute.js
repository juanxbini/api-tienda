// En el archivo categoryRoute.js

import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();
const categoryController = new CategoryController();

// Ruta para obtener todas las categorías
router.get('/', async (req, res) => {
  await categoryController.getAllCategories(req, res);
});

export default router;
