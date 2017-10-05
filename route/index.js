const combineRouters = require('koa-combine-routers');
const testRouter = require('./test');
const studentRouter = require('./student');
const driverRouter = require('./driver');

const router = combineRouters([
    testRouter,
    studentRouter,
    driverRouter
]);

module.exports = router;