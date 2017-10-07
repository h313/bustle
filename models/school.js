const sequelize = require('../db/postgres');

var School = sequelize.define('school', {
    username: sequelize.STRING,
    password: sequelize.STRING.BINARY,
    name: sequelize.STRING,
    drivers: sequelize.ARRAY(sequelize.NUMBER),
    startTime: sequelize.DATE,
    endTime: sequelize.DATE
});

module.exports = School;