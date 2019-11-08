const express = require("express");
const app = express();
const Influx = require("influx");
const influx = new Influx.InfluxDB({
  database: "telegraf",
  username: "gtadmin",
  password: "@lmost12",
  host: "159.242.248.20"
});

app.get("/api/cluster-cpu", function(req, res) {
    influx
      .query("select * from vsphere_cluster_cpu where time > now() - 15m")
      .then(allClusterCpu => {
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