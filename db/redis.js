const Bluebird = require('bluebird');
const redis = Bluebird.promisifyAll(require('redis'));

const client = redis.createClient();

module.exports = client;
