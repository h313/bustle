const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'bustle', 'bustle', 'bustle',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  },
);

module.exports = { sequelize, Sequelize };
