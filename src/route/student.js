const Router = require('koa-router');
const client = require('../db/redis');
const Location = require('../models/location');
const User = require('../models/user');

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'student_working';
});

router.get('/attachdriver', async (ctx) => {
  const { id, driver } = ctx.request.body;
  await User.update(
    { driver },
    { where: { id } },
  );
  ctx.body = { success: 1 };
});

router.get('/bus_location', async (ctx) => {
  const student = await User.findById(ctx.request.body.id);
  const coords = JSON.parse(client.get(student.driver.id));
  const location = await Location.findOne({
    attributes: ['longitude', coords.longitude, 'latitude', coords.latitude],
  });
  ctx.body = { address: location.address };
});

module.exports = router;
