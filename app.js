const Koa = require('koa');
const router = require('./route');
const bodyParser = require('koa-bodyparser');
const { sequelize, Sequelize } = require('./db/postgres');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
app.use((ctx) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});

sequelize.sync().then(() => {
  app.listen(8080);
});

module.exports = app;
