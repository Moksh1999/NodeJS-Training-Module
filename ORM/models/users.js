const Sequelize = require('sequelize');
const sequelize = require('../database/connect');

module.exports = sequelize.define("users",{
    id:{
        type : Sequelize.STRING() , 
        allowNull : false , 
        autoIncrement : true , 
        primaryKey : true
    },
     name: {
        type: Sequelize.STRING(),
        unique : true
    },
    email : {
        type:Sequelize.STRING(),
        unique : true
    }
});


