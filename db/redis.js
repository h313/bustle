const Bluebird = require('bluebird');
const redis = Bluebird.promisifyAll(require('redis'));

const client = await redis.createClient();

module.exports = client;
