# Proyecto Api de Tienda Online

**Descripción:**

Este proyecto consiste en una API diseñada para proporcionar información detallada sobre productos y categorías asociadas, destinada a ser integrada en una tienda web. La funcionalidad principal de la tienda web incluye la capacidad del usuario para listar productos por categoría y ordenarlos según los detalles del producto, lo que facilita la experiencia de compra y la gestión del carrito.

## Tecnologías Utilizadas
**Node.js y Express:** La API está desarrollada utilizando Node.js junto con el framework Express para construir un servidor robusto y eficiente.

**MySQL:** La base de datos subyacente utiliza MySQL para almacenar y recuperar información relacionada con productos y categorías.

**Programación Orientada a Objetos (OOP):** La implementación sigue principios de programación orientada a objetos para una arquitectura de código organizada y fácil de mantener.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de directorios y archivos basada en MVC:

- **controllers:** Contiene controladores que manejan las solicitudes HTTP y gestionan la lógica de negocio.
- **database:** Contiene archivos relacionados con la conexión y configuración de la base de datos.
- **models:** Contiene modelos que representan las entidades de la base de datos y manejan las operaciones relacionadas con ellas.
- **routes:** Contiene rutas que definen las API y enrutadores para diferentes recursos.
- **server.js:** Archivo principal que inicia el servidor y configura los middleware.

## Funcionalidades Actuales
- Listado de productos por categoría.
- Ordenación de productos por detalles.
- Capacidad para agregar productos al carrito de compras.

## Futuras Características
En futuras versiones, la API se ampliará para incluir funcionalidades adicionales destinadas al cliente web encargado de la gestión de la tienda. Estas características incluirán:

- Carga de nuevos productos y categorías.
- Actualización y eliminación de productos existentes.

## Configuración de la Base de Datos

La conexión a la base de datos se establece en el archivo `database/connection.js`. Asegúrate de proporcionar la información correcta del servidor de base de datos, como host, usuario, contraseña y nombre de la base de datos.

```
// database/connection.js
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'contraseña',
  database: 'nombre de base de datos',
});
```
## Controladores

**CategoryController**

- getAllCategories(req, res): Obtiene todas las categorías y las devuelve en formato JSON.
- getSubcategories(req, res): Obtiene las subcategorías de una categoría específica y las devuelve en formato JSON.


**ProductController**

- getAllProducts(req, res): Obtiene todos los productos y los devuelve en formato JSON.
- getProductsByCategory(req, res): Obtiene productos por categoría y los devuelve en formato JSON.
- getProductsByCategoryOrderPrice(req, res): Obtiene productos por categoría ordenados por precio y los devuelve en formato JSON.

## Modelos

**Category Model**

- serialize(category): Método para serializar una categoría.
- listCategories(): Método para obtener todas las categorías de la base de datos.
- listSubcategories(idCategory): Método para obtener las subcategorías de una categoría específica.

**Product Model**

- serialize(product): Método para serializar un producto.
- listProducts(): Método para obtener todos los productos de la base de datos.
- listProductsByCategory(categoryId): Método para obtener productos por categoría.
- listProductsByCategoryOrderPrice(categoryId, order, subcategoria_id): Método para obtener productos por categoría ordenados por precio.

## Rutas

**indexRoute.js**

El módulo indexRoute.js conecta y enlaza las rutas de productos y categorías.

**categoryRoute.js**

El archivo categoryRoute.js define las rutas relacionadas con las categorías y utiliza el CategoryController para manejar las solicitudes.

**productRoute.js**

El archivo productRoute.js define las rutas relacionadas con los productos y utiliza el ProductController para manejar las solicitudes.

## Configuración y Ejecución del Proyecto

**Clonar el Repositorio:**

`git clone https://github.com/tu-usuario/tu-repositorio.git`

**Instalar Dependencias:**

`cd tu-repositorio`
`npm install express mysql`


**Configurar la Base de Datos:**

Asegúrate de tener una base de datos MySQL configurada y actualiza la información de conexión en database/connection.js.

**Iniciar el Servidor:**

`npm start`

**Realizar Peticiones con cURL:**

Ejemplos de cómo realizar peticiones cURL se encuentran en la sección de Documentación de la API.

## Documentación de la API

**Rutas de Categorías**

**GET /api/category**
Descripción: Obtener todas las categorías.
Parámetros de Consulta (Query Parameters): Ninguno.
Encabezados:
Content-Type (Texto): Tipo de contenido de la respuesta.
Valor esperado: application/json.
Ejemplo de solicitud:

`curl http://localhost:3000/api/category`

**GET /api/category/subcategory/:id**
Descripción: Obtener subcategorías de una categoría específica.
Parámetros de Ruta (Path Parameters):
id (Número): Identificador de la categoría para la cual se desean obtener las subcategorías.
Encabezados:
Content-Type (Texto): Tipo de contenido de la respuesta.
Valor esperado: application/json.
Ejemplo de solicitud:

`curl http://localhost:3000/api/category/subcategory/1`

**Rutas de Productos**

**GET /api/products**
Descripción: Obtener todos los productos.
Parámetros de Consulta (Query Parameters): Ninguno.
Encabezados:
Content-Type (Texto): Tipo de contenido de la respuesta.
Valor esperado: application/json.
Ejemplo de solicitud:

`curl http://localhost:3000/api/products`

**GET /api/products/:category_id**
Descripción: Obtener productos por categoría.
Parámetros de Ruta (Path Parameters):
category_id (Número): Identificador de la categoría para la cual se desean obtener los productos.
Encabezados:
Content-Type (Texto): Tipo de contenido de la respuesta.
Valor esperado: application/json.
Ejemplo de solicitud:

`curl http://localhost:3000/api/products/1`

**GET /api/products/:category_id/:order/:subcategory_id?**
Descripción: Obtener productos por categoría ordenados por precio.
Parámetros de Ruta (Path Parameters):
category_id (Número): Identificador de la categoría para la cual se desean obtener los productos.
order (Texto): Orden de los productos (p. ej., "asc" o "desc").
subcategory_id (Número, opcional): Identificador de la subcategoría para la cual se desean obtener los productos.
Encabezados:
Content-Type (Texto): Tipo de contenido de la respuesta.
Valor esperado: application/json.
Ejemplo de solicitud:

`curl http://localhost:3000/api/products/1/asc/2`

## Contribuciones y Problemas
Agradecemos cualquier contribución que puedas hacer para mejorar esta API. Si encuentras algún problema o tienes alguna sugerencia, por favor, abre un problema en el sistema de seguimiento de problemas. Estamos comprometidos a hacer de esta API un recurso aún mejor y valoramos la colaboración de la comunidad.

## Contacto
Si tienes preguntas adicionales o necesitas asistencia, no dudes en ponerte en contacto con nosotros. Puedes encontrarnos a través de correo electrónico juanxbini@gmail.com o en [Linkedin](https://www.linkedin.com/in/juan-cruz-bini-32b4911b8/)

¡Gracias por pasar por este proyecto!. Espero que sea de ayuda.
