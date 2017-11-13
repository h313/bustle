const { sequelize, Sequelize } = require('../db/postgres');

const Student = sequelize.define('student', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username:  {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password:  {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  school: Sequelize.INTEGER,
  driver: Sequelize.INTEGER,
});

module.exports = Student;
