import connection from '../database/connection.js';

class Category {
  // Métodos para operaciones relacionadas con categorías en la base de datos
  // Método para serializar las categorías
  serializeCategory(category) {
    return {
      id: category.id,
      name: category.name,
    };
  }

  // Método para listar todas las categorías
  async listCategories() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM category';

      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export default Category;
