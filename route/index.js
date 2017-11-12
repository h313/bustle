const Router = require('koa-router');
const testRouter = require('./test');
const studentRouter = require('./student');
const driverRouter = require('./driver');
const schoolRouter = require('./school');

const router = new Router();
router
  .use('/status', testRouter.routes(), testRouter.allowedMethods())
  .use('/student', studentRouter.routes(), studentRouter.allowedMethods())
  .use('/driver', driverRouter.routes(), driverRouter.allowedMethods())
  .use('/school', schoolRouter.routes(), schoolRouter.allowedMethods());

module.exports = router;
