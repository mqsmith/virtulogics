const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const Influx = require("influx");
const os = require("os");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const db = require("./models");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect Database
connectDB();

//app.get('/',(req,res) => res.send("API Running"));

// Initialize Middleware
app.use(express.json({ extended: false }));
app.use(express.static(__dirname + "/client/build"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
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

// Influx DB connection and routes
const influx = new Influx.InfluxDB({
  database: "telegraf",
  username: "gtadmin",
  password: "@lmost12",
  host: "159.242.248.20"
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
      console.log("Imflux DB connected successfully");
    });
    // writeDataToInflux(test);
  })
  .catch(error => console.log({ error }));

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
      console.log(allHostsCpu1);
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
      console.log(allHostsCpu15);
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
      console.log(allHostsCpu1);
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

app.get("/api/host-mem/1", function(req, res) {
  influx
    .query(
      `select * from vsphere_host_mem
    ORDER BY DESC LIMIT 2
     `
    )
    .then(allHostsMem1 => {
      console.log(allHostsMem1);
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
      console.log(allHostsMem15);
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

app.get("/api/cluster-cpu", function(req, res) {
  influx
    .query("select * from vsphere_cluster_cpu where time > now() - 15m")
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
        message: "Requested last hour of cluster MEM usage",
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

app.get("/api/host/cpu-mem/1", async function(req, res) {
  let newHashMap = {};
  await influx
    .query(
      `select * from vsphere_host_mem
          ORDER BY DESC LIMIT 2
           `
    )
    .then(allHostsMem1 => {
      for (let i = 0; i < allHostsMem1.length; i++) {
        console.log(allHostsMem1[i].usage_average);
        let moid = allHostsMem1[i].moid;
        console.log(allHostsMem1[i]);
        if (newHashMap[moid]) {
          console.log(allHostsMem1[i].usage_average);
          allHostsMem1[i].mem_usage_average = allHostsMem1[i]["usage_average"];
          newHashMap[moid] = allHostsMem1[i];
        } else {
          newHashMap[moid] = allHostsMem1[i];
        }
      }
    })
    .catch(err => {
      console.log(err);
    });

  await influx
    .query(
      `
          select * from vsphere_host_cpu
          where "cpu"='instance-total'
          ORDER BY DESC LIMIT 2
          `
    )
    .then(allHostsCpu1 => {
      for (let i = 0; i < allHostsCpu1.length; i++) {
        console.log(allHostsCpu1[i].usage_average);
        let moid = allHostsCpu1[i].moid;
        if (newHashMap[moid]) {
          allHostsCpu1[i].cpu_usage_average = allHostsCpu1[i]["usage_average"];
          console.log(allHostsCpu1[i].usage_average);
          delete allHostsCpu1[i].usage_average;
          let oldValues = newHashMap[moid];
          let newValues = allHostsCpu1[i];
          newHashMap[moid] = { ...oldValues, ...newValues };
        } else {
          newHashMap[moid] = allHostsCpu1[i];
        }
      }
    })
    .catch(err => {
      console.log(err);
    });
  res.json({
    ...newHashMap
  });
});

app.get("/api/host/mem/7days/:esxhostname", function(req, res) {
  
  influx
    .query(
      `SELECT mean("usage_average") FROM "vsphere_host_mem" 
      WHERE ("esxhostname" = '${req.params.esxhostname}')
      AND time > now() - 7d GROUP BY time(1h), "esxhostname"
      `
    )
    .then(singleHostMem => {
      // console.log(singleHostMem);
      const hostData = singleHostMem.map(
        data => data.mean
      );
      const time = singleHostMem.map(
        data => data.time
      );
      console.log(time);
      res.json({
        message: "Requested last 7 days of Host Mem Usage",
        error: false,
        data: {hostData, time}
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

app.get("/api/host/cpu/7days/:esxhostname", function(req, res) {
  
  influx
    .query(
      `SELECT mean("usage_average") FROM "vsphere_host_cpu" 
      WHERE ("esxhostname" = '${req.params.esxhostname}')
      AND time > now() - 7d GROUP BY time(1h), "esxhostname"
      `
    )
    .then(singleHostCpu => {
      // console.log(singleHostMem);
      const hostCpuData = singleHostCpu.map(
        data => data.mean
      );
      const time = singleHostCpu.map(
        data => data.time
      );
      console.log(time);
      res.json({
        message: "Requested last 7 days of Host Mem Usage",
        error: false,
        data: {hostCpuData, time}
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

app.get("/api/host/cpu-mem/1/:esxhostname", async function(req, res) {
  let newHashMap = {};
  console.log(req.params.esxhostname);
  await influx
    .query(
      `select * from vsphere_host_mem
          WHERE ("esxhostname" = '${req.params.esxhostname}')
          ORDER BY DESC LIMIT 2
           `
    )
    .then(allHostsMem1 => {
      for (let i = 0; i < allHostsMem1.length; i++) {
        console.log(allHostsMem1[i].usage_average);
        let moid = allHostsMem1[i].moid;
        console.log(allHostsMem1[i]);
        if (newHashMap[moid]) {
          console.log(allHostsMem1[i].usage_average);
          allHostsMem1[i].mem_usage_average = allHostsMem1[i]["usage_average"];
          newHashMap[moid] = allHostsMem1[i];
        } else {
          newHashMap[moid] = allHostsMem1[i];
        }
      }
    })
    .catch(err => {
      console.log(err);
    });

  await influx
    .query(
      `
          select * from vsphere_host_cpu
          WHERE ("esxhostname" = '${req.params.esxhostname}')
          and "cpu"='instance-total'
          ORDER BY DESC LIMIT 2
          `
    )
    .then(allHostsCpu1 => {
      for (let i = 0; i < allHostsCpu1.length; i++) {
        console.log(allHostsCpu1[i].usage_average);
        let moid = allHostsCpu1[i].moid;
        if (newHashMap[moid]) {
          allHostsCpu1[i].cpu_usage_average = allHostsCpu1[i]["usage_average"];
          console.log(allHostsCpu1[i].usage_average);
          delete allHostsCpu1[i].usage_average;
          let oldValues = newHashMap[moid];
          let newValues = allHostsCpu1[i];
          newHashMap[moid] = { ...oldValues, ...newValues };
        } else {
          newHashMap[moid] = allHostsCpu1[i];
        }
      }
    })
    .catch(err => {
      console.log(err);
    });
  res.json({
    ...newHashMap
  });
});

influx
  .getMeasurements()
  .then(names => console.log("My measurement names are: " + names.join(", ")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// app.listen(PORT, function() {
//     console.log(`App is running on http://localhost:${PORT}`);
// });

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
