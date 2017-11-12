const Router = require('koa-router');
const Student = require('../models/student');
const client = require('../db/redis');

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'student_working';
});

router.post('/signup', async (ctx) => {
  Student.create({
    username: ctx.request.body.username,
    password: ctx.request.body.password,
    school: ctx.request.body.school,
  }).then((student) => {
    console.log(student.get({
      plain: true,
    }));
  });
});

router.get('/attachdriver', async (ctx) => {
  Student.findOne({
    attributes: ['id', ctx.request.body.id],
  }).then((student) => {
    student.driver = ctx.request.body.driver;
    student.save().then(() => {
      ctx.body = JSON.stringify({ success: 1 });
    });
  });
});

router.get('/bus_location', async (ctx) => {
  Student.findOne({
    attributes: ['id', ctx.request.body.id],
  }).then((student) => {
    ctx.body = client.get(student.driver.id);
  });
});

module.exports = router;
