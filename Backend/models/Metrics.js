const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema({
  activeUsers: { type: Number, default: 0 },
  newSignups: { type: Number, default: 0 },
  sales: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Metrics", metricsSchema);
