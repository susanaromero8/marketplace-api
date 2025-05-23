const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Modelo de producto de marketplace
const MarketplaceProduct = sequelize.define(
  "MarketplaceProduct",
  {
    product: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    originalprice: DataTypes.NUMERIC,
    price: DataTypes.NUMERIC,
    title: DataTypes.STRING,
    comision: DataTypes.NUMERIC,
    costoenvio: DataTypes.NUMERIC,
    stock: DataTypes.INTEGER,
    marketplace_name: DataTypes.STRING,
    sold_quantity: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL(3, 2),
    reviews_count: DataTypes.INTEGER,
    listing_date: DataTypes.DATE,
  },
  {
    tableName: "marketplace_products",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MarketplaceProduct;
