const router = require("express").Router();
const influxController = require("../../controllers/influxController");

// Matches with "/api/influx"
router.route("/")
  .get(influxController.findAll)
  .post(influxController.create);

// Matches with "/api/influx/:id"
router
  .route("/:id")
  .get(influxController.findById)
  .put(influxController.update)
  .delete(influxController.remove);

module.exports = router;