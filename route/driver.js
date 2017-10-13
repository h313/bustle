const Router = require('koa-router');
const router = new Router({ prefix: '/driver' });

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const client = require('../db/redis');
const Driver = require('../models/driver');
const DriverStats = require('../models/driver_stats');

router.get('/test', async (ctx, next) => {
    ctx.body = 'driver_working';
});

router.get('/update_location', async (ctx, next) => {
    ctx.body = 'todo';
});

module.exports = router;