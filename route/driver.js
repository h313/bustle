const Router = require('koa-router');

const router = new Router({ prefix: '/driver' });
const koaBody = require('koa-body');

const db = require('../db/postgres'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
const client = require('../db/redis');
const Driver = require('../models/driver');
const DriverStats = require('../models/driver_stats');

router.get('/test', async (ctx, next) => {
  ctx.body = 'driver_working';
});

router.post('/signup', koaBody(), async (ctx, next) => {
  sequelize.sync().then(() => Driver.create({
    username: ctx.request.body.username,
    password: ctx.request.body.password,
    name: ctx.request.body.name,
    school: ctx.request.body.school,
  })).then((driver) => {
    const driver_stats = new DriverStats({ id: driver.id, name: driver.name, school: driver.school });
    driver_stats.save((err) => {
      if (err) { console.log(err); }
    });
    ctx.body = JSON.stringify({ id: driver.id });
  });
});

router.post('/update_location', koaBody(), async (ctx, next) => {
  client.set(ctx.request.body.id, JSON.stringify({ lat: ctx.request.body.lat, long: ctx.request.body.long }));
  ctx.body = JSON.stringify({ success: 1 });
});

module.exports = router;
