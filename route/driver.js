const Router = require('koa-router');
const router = new Router({ prefix: '/driver' });

router.get('/', async (ctx, next) => {
    ctx.body = 'driver_working';
});

module.exports = router;