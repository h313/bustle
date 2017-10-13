const Router = require('koa-router');
const router = new Router({ prefix: '/student' });

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const Student = require('../models/student');

router.get('/test', async (ctx, next) => {
    ctx.body = 'student_working';
});

router.get('/signup', async (ctx, next) => {
    sequelize.sync().then(function() {
        return Student.create({
            username: ctx.request.body.username,
            password: ctx.request.body.password
        });
    }).then(function(student) {
        console.log(student.get({
            plain: true
        }));
    });
});

module.exports = router;