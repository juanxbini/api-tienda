
import Product from '../models/productModel.js';

class ProductController {

    async getAllProducts(req, res) {
        try {

            const productModel = new Product();
            const products = await productModel.listProducts();
            const serializedProduct = products.map((product) => {
                return productModel.serialize(product);
            });

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(serializedProduct));

        } catch (error) {

            console.error('Error al obtener todos los productos:', error);
            res.status(500).json({ error: 'Error al obtener los productos' });

        }
    }
    async getProductsByCategory(req, res){
        try {
            const category_id = req.params.category_id;
            const productModel = new Product();
            const products = await productModel.listProductsByCategory(category_id);
            const serializedProduct = products.map((product) => {
                return productModel.serialize(product);
            });

            res.setHeader('Content-Type','application/json');
            res.send(JSON.stringify(serializedProduct));

        } catch (error) {
            
            console.error('Error al obtener todos los productos por categoria:', error);
            res.status(500).json({ error: 'Error al obtener los productos por categoria' });

        }
    }
}

export default ProductController;
