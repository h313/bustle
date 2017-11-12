const Router = require('koa-router');

const router = new Router({ prefix: '/status' });

router.get('/', async (ctx) => {
  ctx.body = 'working';
});

module.exports = router;
