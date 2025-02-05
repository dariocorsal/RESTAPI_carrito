const Carrito = require("../models/Carrito");
const Producto = require("../models/Producto");

const obtenerCarrito = async (req, res) => {
  try {
    let carrito = await Carrito.findOne().populate("productos.producto");
    if (!carrito) {
      carrito = await Carrito.create({ productos: [] });
    }
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el carrito" });
  }
};

const agregarProducto = async (req, res) => {
  try {
    const { productoId, cantidad } = req.body;
    const producto = await Producto.findById(productoId);

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    let carrito = await Carrito.findOne();
    if (!carrito) {
      carrito = await Carrito.create({ productos: [] });
    }

    const itemExistente = carrito.productos.find(
      (item) => item.producto.toString() === productoId
    );

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      carrito.productos.push({ producto: productoId, cantidad });
    }

    carrito.total = carrito.productos.reduce(
      (sum, item) => sum + item.cantidad * producto.precio,
      0
    );

    await carrito.save();
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al agregar producto" });
  }
};

const modificarCantidad = async (req, res) => {
  try {
    const { productoId } = req.params;
    const { cantidad } = req.body;

    if (!cantidad || cantidad < 1) {
      return res
        .status(400)
        .json({ mensaje: "La cantidad debe ser mayor a 0" });
    }

    let carrito = await Carrito.findOne();
    if (!carrito) {
      return res.status(404).json({ mensaje: "Carrito no encontrado" });
    }

    const item = carrito.productos.find((item) =>
      item.producto.equals(productoId)
    );

    if (!item) {
      return res
        .status(404)
        .json({ mensaje: "Producto no encontrado en el carrito" });
    }

    item.cantidad = cantidad;

    carrito.total = carrito.productos.reduce(
      (sum, item) => sum + item.cantidad * item.producto.precio,
      0
    );

    await carrito.save();
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al modificar cantidad" });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const { productoId } = req.params;
    let carrito = await Carrito.findOne();
    if (!carrito) return res.status(404).json({ mensaje: "Carrito vacío" });

    carrito.productos = carrito.productos.filter(
      (item) => item.producto.toString() !== productoId
    );

    carrito.total = carrito.productos.reduce(
      (sum, item) => sum + item.cantidad * item.producto.precio,
      0
    );

    await carrito.save();
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar producto" });
  }
};

const vaciarCarrito = async (req, res) => {
  try {
    let carrito = await Carrito.findOne();
    if (!carrito) return res.status(404).json({ mensaje: "Carrito vacío" });

    carrito.productos = [];
    carrito.total = 0;
    await carrito.save();
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al vaciar carrito" });
  }
};

module.exports = {
  obtenerCarrito,
  agregarProducto,
  modificarCantidad,
  eliminarProducto,
  vaciarCarrito,
};
