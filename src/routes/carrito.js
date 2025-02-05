const express = require("express");
const {
  obtenerCarrito,
  agregarProducto,
  modificarCantidad,
  eliminarProducto,
  vaciarCarrito,
} = require("../controllers/carritoController");

const router = express.Router();

router.get("/", obtenerCarrito);
router.post("/agregar", agregarProducto);
router.put("/modificar/:productoId", modificarCantidad);
router.delete("/eliminar/:productoId", eliminarProducto);
router.delete("/vaciar", vaciarCarrito);

module.exports = router;
