const Koa = require('koa');
const router = require('./route');
const convert = require('koa-convert');
const koaBody = require('koa-body');
const app = module.exports = new Koa();

app.use(convert(router));
app.use(koaBody());
app.use(ctx => {
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});

app.listen(8080);

module.exports = koaBody;