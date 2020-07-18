'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time_start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      submit_deadline: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      group_register_deadline: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      individual_register_deadline: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      event_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};