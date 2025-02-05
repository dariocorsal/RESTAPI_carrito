const mongoose = require("mongoose");

const esquemaCarrito = new mongoose.Schema({
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
      cantidad: { type: Number, required: true, min: 1 },
    },
  ],
  total: { type: Number, default: 0 },
});

module.exports = mongoose.model("Carrito", esquemaCarrito);
