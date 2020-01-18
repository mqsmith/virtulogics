const express = require("express");
const Influx = require("influx");
const influx = new Influx.InfluxDB({
  database: "telegraf",
  username: "telegraf",
  password: "@Advil2019!",
  host: "localhost"
});

require("dotenv").config();

const app = express();


app.get("/api/hosts", function(req, res) {
    influx.HostCpu.find({})
      .then(allHosts => {
        res.json({
          message: "Requested all Host Metrics",
          error: false,
          data: allHosts
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
  
  app.post("/api/hosts", function(req, res) {
    influx.HostCpu.create(req.body)
      .then(newHosts => {
        res.json({
          message: "Successfully created",
          error: false,
          data: newHosts
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

