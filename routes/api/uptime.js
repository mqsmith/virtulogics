const express = require("express");
const connectDB = require("../../config/db");
const path = require("path");
const Influx = require("influx");
const os = require("os");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.get("/api/uptime", function(req, res) {
    influx
      .query(
        `
      select * from vsphere_host_sys
      ORDER BY DESC LIMIT 2
       `
      )
      .then(allHostsUp => {
        console.log(allHostsUp);
        res.json({
          message: "Requested last minute of uptime requests",
          error: false,
          data: allHostsUp
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