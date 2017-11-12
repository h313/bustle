const mongoose = require('../db/mongodb');

const driverStatusSchema = new mongoose.Schema({
  id: Number,
  name: String,
  school: Number,
  depart_times: [Date],
  arrive_times: [Date],
});

const DriverStatus = mongoose.model('DriverStatus', driverStatusSchema);

module.exports = DriverStatus;
