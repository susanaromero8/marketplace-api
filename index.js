const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./src/config/db");

// Variables de entorno
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Rutas
const marketplaceRoute = require("./src/routes/marketplaceProduct.route");
app.use("/marketplace", marketplaceRoute);

//Puerto
const PORT = process.env.PORT || 4000;

// Servidor
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a PostgreSQL establecida.");
    // await sequelize.sync(); // solo si necesitas crear tablas automáticamente
  } catch (err) {
    console.error("❌ Error de conexión:", err);
  }

  console.log(`🛒 Mock API corriendo en http://localhost:${PORT}`);
});
