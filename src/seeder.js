const sequelize = require("./src/config/db");
const MarketplaceProduct = require("./models/MarketplaceProduct");

// Datos a insertar en la tabla marketplace_products
async function seedMarketplaceProducts() {
  const products = [
    {
      product: "P001",
      originalprice: 200.0,
      price: 180.0,
      title: "Monitor LED 24",
      comision: 10.0,
      costoenvio: 15.0,
      stock: 25,
      marketplace_name: "Mercado Libre",
      sold_quantity: 120,
      rating: 4.7,
      reviews_count: 34,
      listing_date: new Date("2024-12-01"),
    },
    {
      product: "P002",
      originalprice: 220.0,
      price: 190.0,
      title: "Teclado Mecánico RGB",
      comision: 12.0,
      costoenvio: 17.0,
      stock: 15,
      marketplace_name: "Amazon",
      sold_quantity: 80,
      rating: 4.5,
      reviews_count: 19,
      listing_date: new Date("2024-11-20"),
    },
    {
      product: "P003",
      originalprice: 240.0,
      price: 210.0,
      title: "Mouse Inalámbrico",
      comision: 14.0,
      costoenvio: 20.0,
      stock: 30,
      marketplace_name: "eBay",
      sold_quantity: 95,
      rating: 4.2,
      reviews_count: 22,
      listing_date: new Date("2024-10-15"),
    },
    {
      product: "P004",
      originalprice: 40.0,
      price: 20.0,
      title: "USB",
      comision: 5.0,
      costoenvio: 5.0,
      stock: 100,
      marketplace_name: "Mercado Libre",
      sold_quantity: 250,
      rating: 4.8,
      reviews_count: 60,
      listing_date: new Date("2024-09-01"),
    },
    {
      product: "P005",
      originalprice: 140.0,
      price: 110.0,
      title: "Control",
      comision: 11.0,
      costoenvio: 10.0,
      stock: 10,
      marketplace_name: "Amazon",
      sold_quantity: 40,
      rating: 3.9,
      reviews_count: 8,
      listing_date: new Date("2024-08-12"),
    },
  ];

  try {
    await MarketplaceProduct.bulkCreate(products, { ignoreDuplicates: true });
    console.log("✅ Seeder completado.");
  } catch (error) {
    console.error("❌ Error insertando marketplace_products:", error.message);
  } finally {
    await sequelize.close();
    process.exit();
  }
}

seedMarketplaceProducts();
