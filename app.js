const Koa = require('koa');
const router = require('./route');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());
app.use(router.routes(), router.allowedMethods());
app.use((ctx) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});

app.listen(8080);

module.exports = app;
