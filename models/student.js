const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    school: Sequelize.INTEGER,
    driver: Sequelize.INTEGER
});

module.exports = Student;