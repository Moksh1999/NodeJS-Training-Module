const Sequelize = require('sequelize');

const sequelize = new Sequelize("app","postgres","",{
    host:"127.0.0.1",
    dialect : "postgres",
    operatorAliases : false
});


module.exports = sequelize;
global.sequelize=sequelize;