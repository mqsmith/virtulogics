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
      console.log("Influx DB connected successfully");
    });
    // writeDataToInflux(test);
  })
  .catch(error => console.log({ error }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/hosts", require("./routes/api/hosts"));
app.post("/api/config", require("./routes/api/admin"));
app.get("/api/host-cpu", require("./routes/api/host-cpu"));
app.get("/api/host-mem", require("./routes/api/host-mem"));
app.get("/api/uptime", require("./routes/api/uptime"));
app.get("/api/cluster-cpu", require("./routes/api/cluster-cpu"));
app.get("/api/chart-mem", require("./routes/api/chart-mem"));
app.get("/api/chart-cpu", require("./routes/api/chart-cpu"));
app.get("/api/host", require("./routes/api/host"));
app.get("/api/host/cpu-mem/1", require("./routes/api/host"));
app.get("/api/host/cpu/1day", require("./routes/api/host"));
app.get("/api/host/mem/1day", require("./routes/api/host"));
app.get("/api/host/mem/7days/:esxhostname", require("./routes/api/host"));
app.get("/api/host/cpu/7days/:esxhostname", require("./routes/api/host"));
app.get("/api/host/cpu-mem/1/:esxhostname", require("./routes/api/host"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// app.listen(PORT, function() {
//     console.log(`App is running on http://localhost:${PORT}`);
// });

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
