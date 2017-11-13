const Router = require('koa-router');
const Driver = require('../models/driver');
const DriverStats = require('../models/driver_stats');
const client = require('../db/redis');

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'driver_working';
});

router.post('/signup', async (ctx) => {
  Driver.create({
    username: ctx.request.body.username,
    password: ctx.request.body.password,
    name: ctx.request.body.name,
    school: ctx.request.body.school,
  }).then((driver) => {
    const driverStats = new DriverStats({
      id: driver.id,
      name: driver.name,
      school: driver.school,
    });
    driverStats.save((err) => {
      if (err) {
        console.log(err);
      }
    });
    ctx.body = { id: driver.id };
  });
});

router.post('/update_location', async (ctx) => {
  client.set(
    ctx.request.body.id,
    JSON.stringify({
      lat: ctx.request.body.lat,
      long: ctx.request.body.long,
    }),
  );
  ctx.body = JSON.stringify({ success: 1 });
});

module.exports = router;
