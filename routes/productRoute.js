
import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

router.get('/', async (req, res) => {
    try {

        await productController.getAllProducts(req, res);

    } catch (error) {

        console.error('Error en la ruta para obtener todos los productos:', error);
        res.status(500).json({ error: 'Error al obtener todos los productos' });

    }
});
router.get('/:category_id', async (req, res) => {
    try {
        
        await productController.getProductsByCategory(req, res);

    } catch (error) {
        
        console.error('Error en la ruta para obtener los productos por categoria:', error)
        res.status(500).json({error: 'Error al obtener los productos por categorias'})

    }
});
router.get('/:category_id/:order/:subcategory_id?', async (req, res) => {
    try {
        
        await productController.getProductsByCategoryOrderPrice(req, res);

    } catch (error) {
        
        console.error('Error en la ruta para obtener los productos ordenados por precio');
        res.status(500).json({error: 'Error al obtener los productos ordenados por precio'})

    }
})

export default router;
