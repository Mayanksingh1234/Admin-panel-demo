const Metrics = require("../models/Metrics");

exports.getMetrics = async (req,res) => {
  try{
    let metrics = await Metrics.findOne().sort({ createdAt: -1 });
    if(!metrics){
      metrics = await Metrics.create({});
    }
    res.json(metrics);
  }catch(err){
    res.status(500).json({ msg: err.message });
  }
}
