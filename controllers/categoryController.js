
import Category from '../models/categoryModel.js';

class CategoryController {
  // Método para obtener todas las categorías
  async getAllCategories(req, res) {
    try {
      const categoryModel = new Category();
      const categories = await categoryModel.listCategories();

      // Serializar las categorías seleccionando las propiedades deseadas
      const serializedCategories = categories.map((category) => categoryModel.serializeCategory(category));

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(serializedCategories));
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  }
}

export default CategoryController;
