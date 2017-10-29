const Koa = require('koa');
const router = require('./route');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const app = module.exports = new Koa();

app.use(convert(router));
app.use(bodyParser());

app.use(async ctx => {
    ctx.body = ctx.request.body;
});

app.listen(8080);

module.exports = app;