
import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

export default router;
