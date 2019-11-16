const mongoose = require('mongoose'); //bring in Mongoose

const envSchema = new mongoose.Schema({    //create a schema
  clusterName: {
    type: String,
    required: true
  },
  hostMem: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const newConfig = mongoose.model('newConfig', envSchema);

module.exports = newConfig