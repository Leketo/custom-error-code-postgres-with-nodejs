'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE OR REPLACE FUNCTION handle_error(p_sqlstate text, p_sqlerrm text, p_function_name text)
    RETURNS void
    LANGUAGE plpgsql
   AS $function$
   begin
     if p_sqlstate not like 'A%' then
        p_sqlstate := '99999';
        p_sqlerrm := 'No se pudo procesar';
     end if;

     raise exception using ERRCODE = p_sqlstate,
                           MESSAGE = p_sqlerrm,
                           HINT = p_sqlerrm || ' in function ' || p_function_name;
   end;
   $function$
   ;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      DROP FUNCTION handle_error(text, text);
    `);
  }
};
