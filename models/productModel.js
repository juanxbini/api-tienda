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
            const query = `SELECT * FROM productos;`;

            connection.query(query, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            });
        });
    }
    listProductsByCategory(categoryId) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM productos WHERE categoria_id = ${categoryId}`;

            connection.query(query, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            });
        });
    }
    listProductsByCategoryOrderPrice(categoryId, order, subcategoria_id){
        return new Promise((resolve, reject) => {
            const subcategoryCondition = subcategoria_id ? `AND subcategoria_id = ${subcategoria_id}` : '';
            
            const query = `SELECT * FROM productos WHERE categoria_id = ${categoryId}
            ${subcategoryCondition} ORDER BY precio ${order};`;
            
            connection.query(query, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
}

export default Product;
