const Router = require('koa-router');
const router = new Router({ prefix: '/student' });
const sequelize = require('../db/postgres');
const Student = require('../models/student');

router.get('/', async (ctx, next) => {
    ctx.body = 'student_working';
});

router.get('/signup', async (ctx, next) => {
    sequelize.sync().then(function() {
        return Student.create({
            username: 'janedoe'
        });
    }).then(function(student) {
        console.log(student.get({
            plain: true
        }));
    });
});

module.exports = router;