const mongoose = require('../db/mongodb');

var driverStatusSchema = new mongoose.Schema({
    id: Number,
    name: String,
    school: Number,
    depart_times: [Date],
    arrive_times: [Date]
});

var DriverStatus = mongoose.model('DriverStatus', driverStatusSchema);

module.exports = DriverStatus;