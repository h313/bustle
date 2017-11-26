const Router = require('koa-router');
const Location = require('../models/location');
const client = require('../db/redis');

const router = new Router();

router.get('/test', async (ctx) => {
  ctx.body = 'driver_working';
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

router.post('/add_address', async (ctx) => {
  const driver = await Driver.findOne({
    attributes: ['id', ctx.request.body.id],
  });
  Location.findOne({
    attributes: ['address', ctx.request.body.address],
  }).then((loc) => {
    if (loc == null) {
      Location.create({
        longitude: ctx.request.body.longitude,
        latitude: ctx.request.body.latitude,
        address: ctx.request.body.address,
      }).then((location) => {
        driver.bus_routes.append(location.id);
        driver.save();
        ctx.body = { id: location.id };
      });
    }
  });
});

module.exports = router;
