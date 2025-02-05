const Producto = require("../models/Producto");

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener productos" });
  }
};

const agregarProducto = async (req, res) => {
  try {
    const { nombre, precio, descripcion, imagen, stock } = req.body;
    const nuevoProducto = new Producto({
      nombre,
      precio,
      descripcion,
      imagen,
      stock,
    });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al agregar producto" });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByIdAndDelete(id);
    if (!producto)
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar producto" });
  }
};

module.exports = { obtenerProductos, agregarProducto, eliminarProducto };
