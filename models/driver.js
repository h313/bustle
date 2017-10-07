const sequelize = require('../db/postgres');

var Driver = sequelize.define('driver', {
    username: sequelize.STRING,
    password: sequelize.STRING.BINARY,
    name: sequelize.STRING,
    students: sequelize.ARRAY(sequelize.NUMBER),
    schools: sequelize.ARRAY(sequelize.NUMBER)
});

module.exports = Driver;