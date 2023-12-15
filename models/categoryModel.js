import connection from '../database/connection.js';
class Category {
  // Método para serializar
  serializeCategory(category) {
    // Imprime en la consola el modelo de la categoría
    console.log('model:', category);

    // Devuelve un objeto con las propiedades id y nombre de la categoría
    return {
      id: category.id,
      nombre: category.nombre,
    };
  }

  // Método para listar categorías
  listCategories() {
    // Retorna una nueva promesa que ejecuta una consulta SQL para obtener todas las categorías
    return new Promise((resolve, reject) => {
      // Define la consulta SQL
      const query = 'SELECT * FROM categorias;';

      // Ejecuta la consulta utilizando la conexión (que debería estar definida en algún lugar)
      connection.query(query, (error, results) => {
        // Verifica si hay un error en la consulta
        if (error) {
          // Rechaza la promesa con el error
          reject(error);
        } else {
          // Resuelve la promesa con los resultados de la consulta
          resolve(results);
        }
      });
    });
  }
}

// Exporta la clase Category para que pueda ser utilizada en otros archivos
export default Category;
