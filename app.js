const Koa = require('koa');
const router = require('./route');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const app = module.exports = new Koa();

app.use(convert(router));
app.use(bodyParser());

app.listen(8080);