const { sequelize, Sequelize } = require('../db/postgres');

const Location = sequelize.define('location', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    initialAutoIncrement: 0,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Location;
