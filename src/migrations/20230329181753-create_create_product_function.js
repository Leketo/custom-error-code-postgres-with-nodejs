'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE OR REPLACE FUNCTION create_product(product_name text, product_code integer, product_price numeric)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
  IF product_name IS NULL OR product_name = '' THEN
    perform raise_custom_error('A0001');
  END IF;

  IF product_price <= 0 THEN
    perform raise_custom_error('A0002');
  END IF;


  -- insert the product into the database
  INSERT INTO products (name, code, price) VALUES (product_name, product_code, product_price);
 EXCEPTION
  WHEN OTHERS THEN
      PERFORM handle_error(SQLSTATE, sqlerrm, 'create_product');
END;
$function$
;`);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      DROP FUNCTION create_product(text, integer, numeric);
    `);
  }
};
