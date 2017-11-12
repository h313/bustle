const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bustle', { useMongoClient: true, promiseLibrary: global.Promise });

module.exports = mongoose;
