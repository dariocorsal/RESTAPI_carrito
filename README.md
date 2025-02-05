RESTAPI- Carrito de Compras “Físico”
Este proyecto es una API REST sencilla para un carrito de compras que permite agregar productos, modificar cantidades, eliminar productos y vaciar el carrito. Se usó Node.js, Express y MongoDB (con Mongoose) para su desarrollo.
Uso del API

La API proporciona endpoints para interactuar con un carrito de compras. A continuación, se detallan los diferentes endpoints disponibles y cómo usarlos en Postman o cualquier otra herramienta de pruebas.
URL del Servidor
http://localhost:3000/api/carrito

Endpoints Principales
•	Obtener el Carrito (GET)
URL:
GET /api/carrito/
Explicación: Devuelve el estado actual del carrito con los productos agregados y el total de la compra.
 

•	Agregar un Producto al Carrito (POST)
URL:
POST /api/carrito/agregar
Headers:
Content-Type: application/json
Body:
{
    "productoId": "67a2b369738a1a3faca508a3",
    "cantidad": 2
}
Explicación: Agrega un producto al carrito usando su ID y especificando la cantidad.
•	Modificar la Cantidad de un Producto en el Carrito (PUT)
URL:
PUT /api/carrito/modificar/:productoId
 
Ejemplo de Response:
PUT /api/carrito/modificar/67a2b369738a1a3faca508a3
Headers:
Content-Type: application/json
Body (JSON):
{
    "cantidad": 5
}
Explicación: Permite modificar la cantidad de un producto dentro del carrito.
•	Eliminar un Producto del Carrito (DELETE)
URL:
DELETE /api/carrito/eliminar/:productoId
Explicación: Elimina un producto del carrito usando su ID.
•	Vaciar el Carrito (DELETE)
URL:
DELETE /api/carrito/vaciar
Explicación: Elimina todos los productos del carrito y reinicia el total a cero.
 
Autenticación
La única autenticación que utiliza la API es la de la URI de MongoDB. Fuera de eso, no requiere autenticación para su uso, ya que es un proyecto de prueba y se puede correr localmente. 

Pruebas POSTMAN
Productos:
POST – Agregar producto a catalogo

GET – Muestra el catálogo de productos
 
DELETE – Eliminar producto de catalogo

Carritos:
POST – Agregar producto al carrito
 
GET – Muestra los productos dentro del carrito

PUT – Modificar cantidad de producto en carrito
 
DELETE – Eliminar producto por id


DELETE – Vaciar carrito
 
Conclusión
Esta API proporciona una implementación básica de un carrito de compras utilizando MongoDB y Mongoose. Aprendí a cómo manejar datos en una base NoSQL y trabajar con operaciones CRUD en un entorno RESTful.
