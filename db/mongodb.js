const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useMongoClient: true, promiseLibrary: global.Promise});

module.exports = mongoose;