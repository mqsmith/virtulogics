require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

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

app.get("/api/hosts", function(req, res) {
    db.HostCpu.find({})
    .then((allHosts) => {
        console.log(allHosts);
        res.json({
            message: "Requested all Host Metrics",
            error: false,
            data: allHosts
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.post("/api/hosts", function(req, res) {
    db.HostCpu.create(req.body)
    .then((newHosts) => {
        console.log("New Host Metics: ", newHosts);
        res.json({
            message: "Successfully created",
            error: false,
            data: newHosts
        })
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

app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});