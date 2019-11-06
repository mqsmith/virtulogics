const express = require("express");
const app = express();

app.get("/api/chart-mem", function(req, res) {
    influx
      .query(
        `select mean("active_average") as "RAM_Usage" from "vsphere_host_mem"
          where time > now() - 60m
          group by "esxhostname", time(120s)
          `
      )
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