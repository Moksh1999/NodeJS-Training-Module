const Sequelize=require('sequelize');


const env = new Sequelize("crudapp","postgres","1234",{
  host : 'localhost',
  dialect : 'postgres'
})
 


module.exports = env;