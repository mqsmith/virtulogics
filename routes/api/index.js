const router = require("express").Router();
const influxRoutes = require("./influx");
const userRoutes = require("./user");

//routes
router.use("/user", userRoutes);
router.use("/influx", influxRoutes);

module.exports = router;
