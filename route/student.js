const Router = require('koa-router');
const router = new Router({ prefix: '/student' });

router.get('/', async (ctx, next) => {
    ctx.body = 'student_working';
});

module.exports = router;