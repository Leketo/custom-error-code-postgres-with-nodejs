const { Sequelize }  = require("sequelize");
const AppError = require("../error/AppError");
require("dotenv").config();

async function createProduct(productName, productCode, productPrice) {
  try {
    const sequelize = new Sequelize({
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD.toString(),
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "postgres",
      dialectOptions: {},
      logging: true,
    });
    const result = await sequelize.query(
      'SELECT create_product(:product_name, :product_code, :product_price);',
      {
        replacements: {
          product_name: productName,
          product_code: productCode,
          product_price: productPrice,
        },
      }
    );
    console.log(result);
  } catch (error) {
    const { code } = error.parent;
    throw new AppError({ message: error.message, errorCode: code, statusCode: code === '99999' ? 500 : undefined });
  }
}

module.exports = createProduct;
