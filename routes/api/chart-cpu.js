const express = require("express");
const app = express();

//Filtered by hostname
app.get("/api/chart-cpu/", function(req, res) {
    influx
      .query(
        `select mean("usage_average") as "CPU_Usage" from "vsphere_host_cpu"
          WHERE ("esxhostname" = 'lab-esxi-01.vdilab.int')
          and time > now() - 60m
          group by "esxhostname", time(120s), "cpu" FILL(null)
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