const Router = require('koa-router');
const client = require('../db/redis');
const User = require('../models/user');
const { authed } = require('./auth');

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'school_working';
});

router.get('/get_buses', authed, async (ctx) => {
  User.findAll({
    where: { school: ctx.state.user.id, },
  }).then((drivers) => {
    const ret = [];
    drivers.forEach((driver) => {
      ret.push(driver.id);
    });
    ctx.body = ret;
  });
});

router.get('/bus_location', authed, async (ctx) => {
  User.findOne({
    where: {
      id: ctx.request.body.driver_id,
      school: ctx.state.user.id,
    },
  }).then((bus) => {
    if (bus != null) {
      client.get(bus.id, (err, coords) => {
        ctx.body = JSON.stringify(coords);
      });
    }
  });
});

module.exports = router;
