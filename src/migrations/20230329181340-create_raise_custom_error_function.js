'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE OR REPLACE FUNCTION raise_custom_error(p_error_code TEXT)
    RETURNS VOID AS $$
    DECLARE
      v_error_message TEXT;
    BEGIN
      -- Find error message in the custom_error_messages table
      SELECT error_message INTO v_error_message
      FROM custom_error_messages
      WHERE error_code = p_error_code;

      -- Raise exception with the retrieved error message
      RAISE EXCEPTION USING
                ERRCODE = p_error_code,
                MESSAGE = v_error_message;
    END;
    $$ LANGUAGE plpgsql;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      DROP FUNCTION raise_custom_error(text, text);
    `);
  }
};
