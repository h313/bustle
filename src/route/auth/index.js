const Router = require('koa-router');
const { register, login } = require('./passwords');
const { refreshAuthToken, sendTokens } = require('./jwt');

const authRouter = new Router();

authRouter
  .post('/refresh', refreshAuthToken)
  .post('/register', register, sendTokens)
  .post('/login', login, sendTokens);

module.exports = { authRouter };
