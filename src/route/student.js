const Router = require('koa-router');
const client = require('../db/redis');
const Location = require('../models/location');
const User = require('../models/user');
const authed = require('./auth').authed;

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'student_working';
});

router.get('/attachdriver', authed, async (ctx) => {
  const { id, driver } = ctx.request.body;
  await User.update(
    { driver },
    { where: { id } },
  );
  ctx.body = { success: 1 };
});

router.get('/attachschool', authed, async (ctx) => {
  const student = await User.findById(ctx.state.user.id);
  const { id, school } = ctx.request.body;
  await student.update(
    { school },
    { where: { id } },
  );
  ctx.body = { success: 1 };
});


router.get('/bus_location', authed, async (ctx) => {
  const student = await User.findById(ctx.state.user.id);
  const coords = JSON.parse(client.get(student.driver.id));
  const location = await Location.findOne({
    attributes: ['longitude', coords.longitude, 'latitude', coords.latitude],
  });
  ctx.body = { address: location.address };
});

module.exports = router;
