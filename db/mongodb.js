const Bluebird = require('bluebird');
const mongoose = Bluebird.promisifyAll(require('mongoose'));

mongoose.connect('mongodb://localhost/bustle', { useMongoClient: true, promiseLibrary: global.Promise });

module.exports = mongoose;
