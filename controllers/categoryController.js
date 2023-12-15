
import Category from '../models/categoryModel.js';

class CategoryController {

  async getAllCategories(req, res) {
    try {
      // Crea una instancia de la clase Category
      const categoryModel = new Category();

      // Obtiene todas las categorías usando el método listCategories de la instancia
      const categories = await categoryModel.listCategories();

      // Serializa cada categoría y guarda los resultados en serializedCategory
      const serializedCategory = categories.map((category) => {
        return categoryModel.serializeCategory(category);
      });

      // Imprime en la consola los IDs de las categorías
      serializedCategory.forEach((category) => {
        console.log(category.id);
      });

      // Establece el encabezado Content-Type a 'application/json'
      res.setHeader('Content-Type', 'application/json');

      // Envía la respuesta al cliente con las categorías serializadas en formato JSON
      res.send(JSON.stringify(serializedCategory));

    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el proceso
      console.error('Error al obtener las categorias:', error);
      
      // Devuelve un código de estado 500 y un mensaje de error en formato JSON
      res.status(500).json({ error: 'Error al obtener las categorias' });
    }
  }
}

// Exporta la clase CategoryController para que pueda ser utilizada en otros archivos
export default CategoryController;
