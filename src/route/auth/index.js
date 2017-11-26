const Router = require('koa-router');
const { register, login } = require('./passwords');

const authRouter = new Router();

authRouter
  .post('/register', register)
  .post('/login', login);

module.exports = { authRouter };
