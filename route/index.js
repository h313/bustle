const combineRouters = require('koa-combine-routers');
const testRouter = require('./test');
const studentRouter = require('./student');
const driverRouter = require('./driver');
const schoolRouter = require('./school');

const router = combineRouters([
    testRouter,
    studentRouter,
    driverRouter,
    schoolRouter
]);

module.exports = router;