const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const db = require("../../models");

router.post("/api/config", function(req, res) {
    db.NewConfig.create(req.body)
    .then((config) => {
        console.log("New Configuration: ", config);
        res.json({
            message: "Successfully created",
            error: false,
            data: config
        })
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

module.exports = router;
