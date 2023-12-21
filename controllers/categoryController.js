
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
        return categoryModel.serialize(category);
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
  async getSubcategories(req,res) {
    try {
      const idSubcategory = req.params.id;
      const categoryModel = new Category();
      const subcategories = await categoryModel.listSubcategories(idSubcategory);

      const serializedSubcategory = subcategories.map((subcategory)=>{
        return categoryModel.serialize(subcategory);
      });

      res.setHeader('Content-type', 'application/json')
      res.send(JSON.stringify(serializedSubcategory))
    } catch (error) {
      console.error('Error al obtener las subcategorias:', error);
      res.status(500).json({error: 'Error al obtener las subcategorias'})
    }
  }
}

// Exporta la clase CategoryController para que pueda ser utilizada en otros archivos
export default CategoryController;
