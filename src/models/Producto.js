const mongoose = require("mongoose");

const esquemaProducto = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String },
  imagen: { type: String },
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model("Producto", esquemaProducto);
