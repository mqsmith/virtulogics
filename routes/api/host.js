const express = require("express");

require("dotenv").config();

const app = express();


app.get("/api/host/uptime", function(req, res) {
    influx
      .query(
        `SELECT * FROM "vsphere_host_sys" WHERE time > now() - 1m
          `
      )
      .then(hostUptime => {
        console.log(hostUptime);
        res.json({
          message: "Requested latest Host Uptime",
          error: false,
          data: hostUptime
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
        `select * from vsphere_host_cpu
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
  
  app.get("/api/host/mem/1day", function(req, res) {
    influx
      .query(
        `SELECT mean("usage_average") FROM "vsphere_host_mem" 
        WHERE time > now() - 1d GROUP BY time(1h), "esxhostname"
        `
      )
      .then(hostMem => {
        // console.log(singleHostMem);
        const hostData = hostMem.map(data => data.mean);
        const hostOne = hostMem.filter(
          data => data.esxhostname === "lab-esxi-01.vdilab.int"
        );
        const hostTwo = hostMem.filter(
          data => data.esxhostname === "lab-esxi-02.vdilab.int"
        );
        const memUsageOne = hostOne.map(data => (data.mean).toFixed(2));
        const memUsageTwo = hostTwo.map(data => (data.mean).toFixed(2));
        const hostName = hostMem.map(data => data.esxhostname);
        const time = hostOne.map(data => data.time);
        console.log(time);
        res.json({
          message: "Requested last 24 hours of Host Mem Usage",
          error: false,
          data: { memUsageOne, memUsageTwo, hostName, time }
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
  
  app.get("/api/host/cpu/1day", function(req, res) {
    influx
      .query(
        `SELECT mean("usage_average") FROM "vsphere_host_cpu" 
        WHERE time > now() - 1d GROUP BY time(1h), "esxhostname"
        `
      )
      .then(hostCpu => {
        // console.log(singleHostMem);
        const hostData = hostCpu.map(data => data.mean);
        const hostOne = hostCpu.filter(
          data => data.esxhostname === "lab-esxi-01.vdilab.int"
        );
        const hostTwo = hostCpu.filter(
          data => data.esxhostname === "lab-esxi-02.vdilab.int"
        );
        const cpuUsageOne = hostOne.map(data => (data.mean).toFixed(2));
        const cpuUsageTwo = hostTwo.map(data => (data.mean).toFixed(2));
        const hostName = hostCpu.map(data => data.esxhostname);
        const time = hostOne.map(data => data.time);
        console.log(time);
        res.json({
          message: "Requested last 24 hours of Host CPU Usage",
          error: false,
          data: { cpuUsageOne, cpuUsageTwo, hostName, time }
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
  
  app.get("/api/host/mem/7days/:esxhostname", function(req, res) {
    influx
      .query(
        `SELECT mean("usage_average") FROM "vsphere_host_mem" 
        WHERE ("esxhostname" = '${req.params.esxhostname}')
        AND time > now() - 7d GROUP BY time(4h), "esxhostname"
        `
      )
      .then(singleHostMem => {
        // console.log(singleHostMem);
        const hostData = singleHostMem.map(data => data.mean);
        const time = singleHostMem.map(data => data.time);
        console.log(time);
        res.json({
          message: "Requested last 7 days of Host Mem Usage",
          error: false,
          data: { hostData, time }
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
        AND time > now() - 7d GROUP BY time(4h), "esxhostname"
        `
      )
      .then(singleHostCpu => {
        // console.log(singleHostMem);
        const hostCpuData = singleHostCpu.map(data => data.mean);
        const time = singleHostCpu.map(data => data.time);
        console.log(time);
        res.json({
          message: "Requested last 7 days of Host Mem Usage",
          error: false,
          data: { hostCpuData, time }
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
  
  module.exports = app;