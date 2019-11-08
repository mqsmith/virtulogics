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

// to narrow down the fields we return we can do "select cpu, usagemhz_average, esxhostname from vsphere_host_cpu"
app.get("/api/host-cpu/1", function(req, res) {
  influx
    .query(
      `
    select * from vsphere_host_cpu
    where "cpu"='instance-total'
    ORDER BY DESC LIMIT 2
    `
    )
    .then(allHostsCpu1 => {
      res.json({
        message: "Requested all host CPU data for the last 1 minute",
        error: false,
        data: allHostsCpu1
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

app.get("/api/host-cpu/15", function(req, res) {
  influx
    .query("select * from vsphere_host_cpu where time > now() - 15m")
    .then(allHostsCpu15 => {
      res.json({
        message: "Requested all host CPU data for the last minute",
        error: false,
        data: allHostsCpu15
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

app.get("/api/host-cpu/1", function(req, res) {
  influx
    .query("select * from vsphere_host_cpu where time > now() - 1m")
    .then(allHostsCpu1 => {
      res.json({
        message: "Requested all host CPU data for the last 15 minutes",
        error: false,
        data: allHostsCpu1
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