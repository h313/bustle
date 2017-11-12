const db = require('../db/postgres'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;

const School = sequelize.define('school', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  students: Sequelize.ARRAY(Sequelize.INTEGER),
});

module.exports = School;
