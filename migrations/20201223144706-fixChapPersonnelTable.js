'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('chapter_personnel','chapter_id',{
      type:Sequelize.BIGINT,
      allowNull:false
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('chapter_personnel','chapter_id',{
      type:Sequelize.BIGINT,
      allowNull:false
    });
  }
};