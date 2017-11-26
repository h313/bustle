const assert = require('assert');
const jwt = require('jsonwebtoken');
const koaJwt = require('koa-jwt');
const Bluebird = require('bluebird');
const compose = require('koa-compose');
const bcrypt = require('./hashing');
const User = require('../../models/user');

const verify = Bluebird.promisify(jwt.verify);

async function createAuthToken(ctx, next) {
  ctx.state.token = jwt.sign(
    { id: ctx.state.user.id },
    process.env.SECRET_KEY,
    { expiresIn: '10m' },
  );
  await next();
}

async function createRefreshToken(ctx, next) {
  const refreshToken = jwt.sign(
    { id: ctx.state.user.id, type: 'refresh' },
    process.env.SECRET_KEY,
    { expiresIn: '14d' },
  );
  ctx.state.refreshToken = refreshToken;
  await User.update(
    { refreshToken: await bcrypt.hash(refreshToken) },
    { where: { id: ctx.state.user.id } },
  );
  await next();
}

async function validateRefreshToken(ctx, next) {
  const { refreshToken } = ctx.request.body;
  try {
    await verify(refreshToken, process.env.SECRET_KEY);
    const { id } = jwt.decode(refreshToken);
    const user = await User.findOne({ where: { id } });
    assert(await bcrypt.compare(refreshToken, user.refreshToken));
    ctx.state.user = user;
    await next();
  } catch (err) {
    ctx.status = 401;
  }
}

async function serializeTokens(ctx, next) {
  ctx.body = {
    token: ctx.state.token,
    refreshToken: ctx.state.refreshToken,
  };
  await next();
}

const sendTokens = compose([
  createAuthToken,
  createRefreshToken,
  serializeTokens,
]);

const refreshAuthToken = compose([
  validateRefreshToken,
  createAuthToken,
  serializeTokens,
]);

const authed = koaJwt({ secret: process.env.SECRET_KEY });

module.exports = {
  refreshAuthToken,
  sendTokens,
  authed,
};
