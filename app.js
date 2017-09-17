const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
    ctx.body = 'Welcome to Bustle!';
});

if (!module.parent) app.listen(8080);