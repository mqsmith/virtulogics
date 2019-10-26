const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const Influx = require('influx');
const os = require('os');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

const db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect Database
connectDB();

//app.get('/',(req,res) => res.send("API Running"));

// Initialize Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/profile', require('./routes/api/profile'));
//app.use('/api/posts', require('./routes/api/posts'));

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
/* .then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  // writeDataToInflux(test);
})
.catch(error => console.log({ error })); */

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

app.get("/api/chart-mem", function(req, res) {
  influx.query(`select mean("active_average") as "RAM_Usage" from "vsphere_host_mem"
    where time > now() - 1h
    group by "esxhostname", time(60s)
    `)
    .then(allClusterCpu => {
      // console.log(allClusterCpu);
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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
