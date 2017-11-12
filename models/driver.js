const db = require('../db/postgres'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;

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
