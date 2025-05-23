const { Router } = require("express");
const {
  getAllProducts,
  getProductById,
  upsertProduct,
  deleteProduct,
} = require("../controllers/marketplaceProduct.controller");

const router = Router();
// Obtener todos los productos
router.get("/products", getAllProducts);

// Obtener producto por ID
router.get("/products/:id", getProductById);

// Insertar o actualizar producto
router.post("/update", upsertProduct);

// Eliminar producto por ID
router.delete("/delete/:id", deleteProduct);

module.exports = router;
