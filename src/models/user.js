const { sequelize, Sequelize } = require('../db/postgres');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  type: {
    type: Sequelize.ENUM,
    values: ['student', 'driver', 'admin'],
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  refreshToken: {
    type: Sequelize.STRING,
  },
  bus_routes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  students: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = User;
