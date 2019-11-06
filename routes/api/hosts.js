const express = require("express");

require("dotenv").config();

const app = express();


app.get("/api/hosts", function(req, res) {
    db.HostCpu.find({})
      .then(allHosts => {
        console.log(allHosts);
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
    db.HostCpu.create(req.body)
      .then(newHosts => {
        console.log("New Host Metics: ", newHosts);
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

