const Router = require('koa-router');
const router = new Router({ prefix: '/student' });

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const Student = require('../models/student');
const client = require('../db/redis');

router.get('/test', async (ctx, next) => {
    ctx.body = 'student_working';
});

router.get('/signup', koaBody(), async (ctx, next) => {
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

router.get('/bus_location', koaBody(), async (ctx, next) => {
    Student.findOne({
        attributes: ['id', ctx.request.body.id]
    }).then(student => {
        ctx.body = client.get(student.driver.id);
    });
});

module.exports = router;