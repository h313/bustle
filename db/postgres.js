const Sequelize = require('sequelize');
const sequelize = new Sequelize('bustle', 'admin', 'password', {dialect: 'postgres'});

const Student = sequelize.define('student', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    school: Sequelize.NUMBER,
    driver: Sequelize.NUMBER
});

const School = sequelize.define('school', {
    username: sequelize.STRING,
    password: sequelize.STRING.BINARY,
    name: sequelize.STRING,
    drivers: sequelize.ARRAY(sequelize.NUMBER),
    startTime: sequelize.DATE,
    endTime: sequelize.DATE
});

const Driver = sequelize.define('driver', {
    username: sequelize.STRING,
    password: sequelize.STRING.BINARY,
    name: sequelize.STRING,
    students: sequelize.ARRAY(sequelize.NUMBER),
    schools: sequelize.ARRAY(sequelize.NUMBER)
});

module.exports = {Student, School, Driver, sequelize};