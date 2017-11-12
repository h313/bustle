const { sequelize, Sequelize } = require('../db/postgres');

const Driver = sequelize.define('driver', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    initialAutoIncrement: 0,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  school: Sequelize.INTEGER,
  students: Sequelize.ARRAY(Sequelize.INTEGER),
});

module.exports = Driver;
