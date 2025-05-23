const MarketplaceProduct = require("../models/MarketplaceProduct");

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await MarketplaceProduct.findAll();
    res.json({ items: products });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error al obtener productos del marketplace" });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const product = await MarketplaceProduct.findOne({
      where: { product: req.params.id },
    });
    console.log(product);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear o actualizar producto
const upsertProduct = async (req, res) => {
  const updatedProduct = req.body;

  try {
    const [product, created] = await MarketplaceProduct.upsert(updatedProduct, {
      returning: true,
    });

    res.status(200).json({
      message: created ? "Producto insertado" : "Producto actualizado",
      product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Eliminar producto por ID
const deleteProduct = async (req, res) => {
  try {
    const deleted = await MarketplaceProduct.destroy({
      where: { product: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("❌ Error al eliminar producto:", error);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  upsertProduct,
  deleteProduct,
};
