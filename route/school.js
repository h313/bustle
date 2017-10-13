const Router = require('koa-router');
const router = new Router({ prefix: '/school' });

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const School = require('../models/school');

router.get('/test', async (ctx, next) => {
    ctx.body = 'school_working';
});

router.get('/', async (ctx, next) => {
    ctx.body = 'todo';
});

module.exports = router;