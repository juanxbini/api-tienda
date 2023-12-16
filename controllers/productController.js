
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
}

export default ProductController;
