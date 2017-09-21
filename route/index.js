const combineRouters = require("koa-combine-routers");
const testRouter = require("./test");

const router = combineRouters([
    testRouter
]);

module.exports = router;