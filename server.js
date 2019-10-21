require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Influx = require("influx");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});

// app.get("/api/cars/:id", function(req, res) {
//     db.Tesla.findById(req.params.id)
//     .then((singleTesla) => {
//         res.json({
//             message: "Requested all Teslas",
//             error: false,
//             data: singleTesla
//         });
//     }).catch((err) => {
//         console.log(err);
//         res.json({
//             message: err.message,
//             error: true
//         })
//     })
// });

// app.get("/api/hosts", function(req, res) {
//     db.HostCpu.find({})
//     .then((allHosts) => {
//         console.log(allHosts);
//         res.json({
//             message: "Requested all Host Metrics",
//             error: false,
//             data: allHosts
//         });
//     }).catch((err) => {
//         console.log(err);
//         res.json({
//             message: err.message,
//             error: true
//         })
//     })
// });

// app.post("/api/hosts", function(req, res) {
//     db.HostCpu.create(req.body)
//     .then((newHosts) => {
//         console.log("New Host Metics: ", newHosts);
//         res.json({
//             message: "Successfully created",
//             error: false,
//             data: newHosts
//         })
//     }).catch((err) => {
//         console.log(err);
//         res.json({
//             message: err.message,
//             error: true
//         })
//     })
// });

// Influx DB connection and routes
const influx = new Influx.InfluxDB({
    database: "telegraf",
    username: "gtadmin",
    password: "@lmost12",
    host: "159.242.248.20",
  });

  influx
  .getDatabaseNames()
  .then(names => {
    if (!names.includes("telegraf")) {
      return influx.createDatabase("telegraf");
    }
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
    // writeDataToInflux(test);
  })
  .catch(error => console.log({ error }));

  app.get("/api/host-cpu/15", function(req, res) {
    influx.query('select * from vsphere_host_cpu where time > now() - 15m')
    .then((allHostsCpu15) => {
        console.log(allHostsCpu15);
        res.json({
            message: "Requested all host CPU data for the last minute",
            error: false,
            data: allHostsCpu15
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.get("/api/host-cpu/1", function(req, res) {
  influx.query('select * from vsphere_host_cpu where time > now() - 1m')
  .then((allHostsCpu1) => {
      console.log(allHostsCpu1);
      res.json({
          message: "Requested all host CPU data for the last 15 minutes",
          error: false,
          data: allHostsCpu1
      });
  }).catch((err) => {
      console.log(err);
      res.json({
          message: err.message,
          error: true
      })
  })
});

app.get("/api/host-mem/1", function(req, res) {
  influx.query('select * from vsphere_host_mem where time > now() - 1m')
  .then((allHostsMem1) => {
      console.log(allHostsMem1);
      res.json({
          message: "Requested all host MEM data for the last 1 minute",
          error: false,
          data: allHostsMem1
      });
  }).catch((err) => {
      console.log(err);
      res.json({
          message: err.message,
          error: true
      })
  })
});

app.get("/api/host-mem/15", function(req, res) {
  influx.query('select * from vsphere_host_mem where time > now() - 15m')
  .then((allHostsMem15) => {
      console.log(allHostsMem15);
      res.json({
          message: "Requested all host MEM data for the last 15 minutes",
          error: false,
          data: allHostsMem15
      });
  }).catch((err) => {
      console.log(err);
      res.json({
          message: err.message,
          error: true
      })
  })
});


app.use(express.static(__dirname + '/client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// app.listen(PORT, function() {
//     console.log(`App is running on http://localhost:${PORT}`);
// });