const Router = require('koa-router');
const testRouter = require('./test');
const { authRouter } = require('./auth');
const studentRouter = require('./student');
const driverRouter = require('./driver');
const schoolRouter = require('./school');

const router = new Router({ prefix: '/api' });
router
  .use('/status', testRouter.routes(), testRouter.allowedMethods())
  .use('/auth', authRouter.routes(), authRouter.allowedMethods())
  .use('/student', studentRouter.routes(), studentRouter.allowedMethods())
  .use('/driver', driverRouter.routes(), driverRouter.allowedMethods())
  .use('/school', schoolRouter.routes(), schoolRouter.allowedMethods());

module.exports = router;
