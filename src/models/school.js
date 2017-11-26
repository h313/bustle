const { sequelize, Sequelize } = require('../db/postgres');

const School = sequelize.define('school', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  students: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
});

module.exports = School;
