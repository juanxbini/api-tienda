import connection from '../database/connection.js';

class Product {
  // Métodos para operaciones relacionadas con productos en la base de datos
  async getAvailableProductsByCategory(category) {
    // Implementar lógica para obtener productos con stock mayor a 0 por categoría
    // ...
  }

  async getProductsByCategoryOrderedByPrice(category, order) {
    // Implementar lógica para obtener productos por categoría y ordenados por precio
    // ...
  }
}

export default Product;
