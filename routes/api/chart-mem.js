const express = require("express");
const app = express();

app.get("/api/chart-mem/:clustername", function(req, res) {
    influx
      .query(
        `SELECT mean("usage_average") FROM "vsphere_host_mem" 
        WHERE ("clustername" = '${req.params.clustername}')
        AND time > now() - 7d GROUP BY time(1h), "clustername" fill(none)
        `
      )
      .then(allClusterMem => {
        console.log(allClusterMem);
        res.json({
          message: "Requested last 7 days of cluster MEM usage",
          error: false,
          data: allClusterMem
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