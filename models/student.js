const { sequelize, Sequelize } = require('../db/postgres');

const Student = sequelize.define('student', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  school: Sequelize.INTEGER,
  driver: Sequelize.INTEGER,
});

module.exports = Student;
