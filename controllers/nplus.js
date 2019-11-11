const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/host/cpu-mem/1", function(req, res) {
  const cluster = new db.NPlus({
    clusterName: req.body.clusterName.toLowerCase(),
    nPlusCPU: req.body.nPlusCPU,
    nPlusMEM: req.body.nPlusMEM
  });
  cluster.save((err, newNPlus) => {
    if (err) {
      return res.status(500).json({
        message: "Error creating new N+ Values.",
        error: true,
        data: err
      });
    } else {
      return res.json({
        message: "Successfully created new N+ Values.",
        error: false,
        data: newNPlus
      });
    }
  });
});

module.exports = router;