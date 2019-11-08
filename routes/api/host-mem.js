const express = require("express");
const connectDB = require("../../config/db");
const path = require("path");
const Influx = require("influx");
const os = require("os");
const bodyParser = require("body-parser");
require("dotenv").config();
const influx = new Influx.InfluxDB({
  database: "telegraf",
  username: "gtadmin",
  password: "@lmost12",
  host: "159.242.248.20"
});

const app = express();

app.get("/api/host-mem/1", function(req, res) {
    influx
      .query(
        `select * from vsphere_host_mem
      ORDER BY DESC LIMIT 2
       `
      )
      .then(allHostsMem1 => {
        res.json({
          message: "Requested all host MEM data for the last 1 minute",
          error: false,
          data: allHostsMem1
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
  
  app.get("/api/host-mem/15", function(req, res) {
    influx
      .query("select * from vsphere_host_mem where time > now() - 15m")
      .then(allHostsMem15 => {
        res.json({
          message: "Requested all host MEM data for the last 15 minutes",
          error: false,
          data: allHostsMem15
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