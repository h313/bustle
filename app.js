const Koa = require('koa');
const router = require('./route');
const bodyParser = require('koa-bodyparser');
const { sequelize } = require('./db/postgres');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use((ctx) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});

sequelize.sync({ force: true });
app.listen(8080);

module.exports = app;
