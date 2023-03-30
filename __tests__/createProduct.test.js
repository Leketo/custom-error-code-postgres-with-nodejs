const createProduct = require('../src/functions/createProduct');
const { test, expect } = require('jest');

describe('createProduct', () => {
  it('creates a product in the database', async () => {
    const productName = 'Test Product';
    const productCode = 123;
    const productPrice = 9.99;

    const product = await createProduct(productName, productCode, productPrice);
  });
});
