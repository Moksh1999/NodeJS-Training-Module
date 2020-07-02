'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      id:{
        type : Sequelize.INTEGER() , 
        allowNull : false , 
        autoIncrement : true , 
        primaryKey : true
    },
    name : {
      type : Sequelize.STRING(30),
      allowNull : false,
      unique : true
    },
    email : {
      type : Sequelize.STRING(30),
      allowNull : false,
      unique : true
    },
    createdAT : Sequelize.DATE,
    updatedAT : Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
