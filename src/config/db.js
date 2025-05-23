require("dotenv").config();
const { Sequelize } = require("sequelize");

// Instancia de Sequelize usando variables de entorno
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  }
);
module.exports = sequelize;
