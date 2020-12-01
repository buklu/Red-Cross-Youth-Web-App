'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      membership_form_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'membership_forms', 
          key: 'id',
        }
      },
      type: {
        type: Sequelize.ENUM('Chapter Admin', 'Chapter Youth Advisor', 'Council', 'Council Advisor')
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
    await queryInterface.dropTable('users');
  }
};