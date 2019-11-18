const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const db = require("../../models");


    router.post("/api/cluster/nPlus", function(req, res) {
        console.log("This is just a test to see if this is working")
        console.log(req.body)
        db.NPlus.findOneAndUpdate(req.body)
        .then((newNPlus) => {
            console.log("New NPlus: ", newNPlus);
            res.json({
                message: "Successfully created",
                error: false,
                data: newNPlus
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