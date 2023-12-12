
import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

router.get('/available/:category', async (req, res) => {
    await productController.getAvailableProductsByCategory(req, res);
});

router.get('/ordered-by-price/:category/:order', async (req, res) => {
    await productController.getProductsByCategoryOrderedByPrice(req, res);
});
// ... otras rutas para productos

export default router;
