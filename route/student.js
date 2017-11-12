const Router = require('koa-router');

const router = new Router({ prefix: '/student' });
const koaBody = require('koa-body');

const { sequelize } = require('../db/postgres');
const Student = require('../models/student');
const client = require('../db/redis');

router.get('/test', async (ctx) => {
  ctx.body = 'student_working';
});

router.post('/signup', koaBody(), async (ctx) => {
  sequelize.sync().then(() => Student.create({
    username: ctx.request.body.username,
    password: ctx.request.body.password,
    school: ctx.request.body.school,
  })).then((student) => {
    console.log(student.get({
      plain: true,
    }));
  });
});

router.get('/attachdriver', koaBody(), async (ctx) => {
  Student.findOne({
    attributes: ['id', ctx.request.body.id],
  }).then((student) => {
    student.driver = ctx.request.body.driver;
    student.save().then(() => {
      ctx.body = JSON.stringify({ success: 1 });
    });
  });
});

router.get('/bus_location', koaBody(), async (ctx) => {
  Student.findOne({
    attributes: ['id', ctx.request.body.id],
  }).then((student) => {
    ctx.body = client.get(student.driver.id);
  });
});

module.exports = router;
