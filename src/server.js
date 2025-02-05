const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const conectarBD = require("./config/database");

const app = express();

conectarBD();

app.use(express.json());

app.use("/api/carrito", require("./routes/carrito"));
app.use("/api/productos", require("./routes/productos"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
