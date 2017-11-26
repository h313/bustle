const Router = require('koa-router');
const client = require('../db/redis');

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'school_working';
});

router.get('/get_buses', async (ctx) => {
  School.findOne({
    attributes: ['school', ctx.request.body.id],
  }.then((school) => {
    Driver.findAll({
      attributes: ['school', school.id],
    }).then((drivers) => {
      const ret = [];
      drivers.forEach((driver) => {
        ret.push(driver.id);
      });
      ctx.body = ret;
    });
  }));
});

router.get('/bus_location', async (ctx) => {
  Driver.findOne({
    where: {
      id: ctx.request.body.driver_id,
    },
  }).then((bus) => {
    client.get(bus.id, (err, coords) => {
      ctx.body = JSON.stringify(coords);
    });
  });
});

module.exports = router;
