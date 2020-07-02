const Sequelize = require('sequelize');
const env = require('../config/env');

	const User = env.define("users", {
      id: {
        type: Sequelize.INTEGER,
		autoIncrement : true,
		primaryKey : true
      },
	  name: {
		type: Sequelize.STRING
	  },
	  email: {
		type: Sequelize.STRING
	  },
	  age: {
		type: Sequelize.INTEGER
	  }
	});
  
module.exports = User;