const express = require("express");
const {
  obtenerProductos,
  agregarProducto,
  eliminarProducto,
} = require("../controllers/productoController");

const router = express.Router();

router.get("/", obtenerProductos);
router.post("/agregar", agregarProducto);
router.delete("/eliminar/:id", eliminarProducto);

module.exports = router;
