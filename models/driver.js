const { sequelize, Sequelize } = require('../db/postgres');

const Driver = sequelize.define('driver', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    initialAutoIncrement: 0,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  school: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  students: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
});

module.exports = Driver;
