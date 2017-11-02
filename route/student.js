const Router = require('koa-router');
const router = new Router({ prefix: '/student' });
const koaBody = require('koa-body');

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const Student = require('../models/student');
const client = require('../db/redis');

router.get('/test', async (ctx, next) => {
    ctx.body = 'student_working';
});

router.post('/signup', koaBody(), async (ctx, next) => {
    sequelize.sync().then(function() {
        return Student.create({
            username: ctx.request.body.username,
            password: ctx.request.body.password,
            school: ctx.request.body.school
        });
    }).then(function(student) {
        console.log(student.get({
            plain: true
        }));
    });
});

router.get('/attachdriver', koaBody(), async (ctx, next) => {
    Student.findOne({
        attributes: ['id', ctx.request.body.id]
    }).then(student => {
        student.driver = ctx.request.body.driver;
        student.save().then(() => {
            ctx.body = JSON.stringify({success: 1});
        });
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
