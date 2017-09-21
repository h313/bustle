const Koa = require('koa');
const router = require('./route');
const convert = require('koa-convert');
const app = module.exports = new Koa();

app.use(convert(router));

app.listen(8080);