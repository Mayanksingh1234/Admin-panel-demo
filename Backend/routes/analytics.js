const router = require("express").Router();
const { getMetrics } = require("../controllers/analyticsController");
const auth = require("../middleware/auth");

router.get("/", auth("admin"), getMetrics);

module.exports = router;
