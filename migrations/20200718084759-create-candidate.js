'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      group_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      form_id: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      university: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      student_card: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, 
        }
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Candidates');
  }
};