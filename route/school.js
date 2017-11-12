const Router = require('koa-router');

const router = new Router({ prefix: '/school' });
const koaBody = require('koa-body');

const db = require('../db/postgres'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
const School = require('../models/school');
const Driver = require('../models/driver');
const client = require('../db/redis');

router.get('/test', async (ctx, next) => {
  ctx.body = 'school_working';
});

router.post('/signup', koaBody(), async (ctx, next) => {
  sequelize.sync().then(() => School.create({
    username: ctx.request.body.username,
    password: ctx.request.body.password,
    name: ctx.request.body.name,
  })).then((school) => {
    ctx.body = JSON.stringify({ id: school.id });
  });
});

router.get('/get_buses', koaBody(), async (ctx, next) => {
  School.findOne({
    attributes: ['school', ctx.request.body.id],
  }.then((school) => {
    Driver.findAll({
      attributes: ['school', school.id],
    }).then((drivers) => {
      ret = [];
      drivers.forEach((driver) => {
        ret.push(driver.id);
      });
      ctx.body = ret;
    });
  }));
});

router.get('/bus_location', koaBody(), async (ctx, next) => {
  Driver.findOne({
    where: {
      id: ctx.request.headers.driver_id,
    },
  }).then((bus) => {
    client.get(bus.id, (err, coords) => {
      ctx.body = JSON.stringify(coords);
    });
  });
});

module.exports = router;
