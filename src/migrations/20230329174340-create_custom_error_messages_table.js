'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('custom_error_messages', {
      error_code: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
      },
      error_message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('custom_error_messages');
  }
};
