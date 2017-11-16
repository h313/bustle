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
    name: ctx.request.body.name,
    school: ctx.request.body.school,
  }).then((student) => {
    ctx.body = { id: student.id };
  });
});

router.get('/attachdriver', async (ctx) => {
  const { id, driver } = ctx.request.body;
  await Student.update(
    { driver },
    { where: { id } },
  );
  ctx.body = { success: 1 };
});

router.get('/bus_location', async (ctx) => {
  const student = await Student.findById(ctx.request.body.id);
  ctx.body = client.get(student.driver.id);
});

module.exports = router;
