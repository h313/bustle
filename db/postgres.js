const Sequelize = require('sequelize');
const sequelize = new Sequelize('bustle', 'bustle', 'bustle', {host: 'localhost', dialect: 'postgres'});

module.exports = {sequelize, Sequelize};