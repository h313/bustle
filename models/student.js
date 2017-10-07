const sequelize = require('../db/postgres');

var Student = sequelize.define('student', {
    username: sequelize.STRING,
    password: sequelize.STRING.BINARY,
    name: sequelize.STRING,
    school: sequelize.NUMBER,
    driver: sequelize.NUMBER
});

module.exports = Student;