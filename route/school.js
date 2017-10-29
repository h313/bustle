const Router = require('koa-router');
const router = new Router({ prefix: '/school' });

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const School = require('../models/school');
const Driver = require('../models/driver');
const client = require('../db/redis');

router.get('/test', async (ctx, next) => {
    ctx.body = 'school_working';
});

router.get('/get_buses', async (ctx, next) => {
    School.findOne({
        attributes: ['id', ctx.request.body.id]
    }).then(school => {
        ctx.body = school.drivers;
    });
});

router.get('/bus_location', async (ctx, next) => {
    Driver.findOne({
        attributes: ['id', ctx.request.body.driverid]
    }).then(bus => {
        ctx.body = client.get(bus.id);
    });
});

module.exports = router;