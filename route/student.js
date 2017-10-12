const Router = require('koa-router');
const router = new Router({ prefix: '/student' });
const pg = require('../db/postgres');

router.get('/', async (ctx, next) => {
    ctx.body = 'student_working';
});

router.get('/signup', async (ctx, next) => {
    pg.sequelize.sync().then(function() {
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