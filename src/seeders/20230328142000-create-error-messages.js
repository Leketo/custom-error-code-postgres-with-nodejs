module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('custom_error_messages', [
        { error_code: 'A0001', error_message: 'Product name is required' },
        { error_code: 'A0002', error_message: 'Product price must be greater than zero' },
        { error_code: 'A0003', error_message: 'Product code is invalid' },
      ]);
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('custom_error_messages', null, {});
    },
  };
