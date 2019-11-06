const express = require("express");
const app = express();

app.get("/api/cluster-cpu", function(req, res) {
    influx
      .query("select * from vsphere_cluster_cpu where time > now() - 15m")
      .then(allClusterCpu => {
        console.log(allClusterCpu);
        res.json({
          message: "Requested last 15 minutes cluster CPU stats",
          error: false,
          data: allClusterCpu
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          message: err.message,
          error: true
        });
      });
  });

  module.exports = app;