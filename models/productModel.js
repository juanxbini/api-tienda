import connection from '../database/connection.js';

class Product {
    serialize(product) {
        return {
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            categoria_id: product.categoria_id,
            subcategoria_id: product.subcategoria_id
        };
    }
    listProducts() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM productos;`

            connection.query(query, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
}

export default Product;
