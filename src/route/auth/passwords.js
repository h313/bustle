const assert = require('assert');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

const saltRounds = 13;

async function register(ctx, next) {
  try {
    const { name, email, password } = ctx.request.body;
    assert(password);
    const hash = await bcrypt.hash(password, saltRounds);
    await User.create({ name, email, hash });
    await next();
  } catch (err) {
    ctx.status = 400;
  }
}

async function login(ctx, next) {
  try {
    const { email, password } = ctx.request.body;
    const { hash } = await User.findOne({
      attributes: ['hash'],
      where: { email },
      plain: true,
    });
    assert(await bcrypt.compare(password, hash));
    await next();
  } catch (err) {
    ctx.status = 401;
  }
}

module.exports = { register, login };
