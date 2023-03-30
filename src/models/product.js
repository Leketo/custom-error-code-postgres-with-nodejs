'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define associations here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};
