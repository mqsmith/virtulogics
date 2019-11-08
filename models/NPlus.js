const mongoose = require('mongoose'); //bring in Mongoose

const NPlusSchema = new mongoose.Schema({    //create a schema
  clusterName: {
    type: String,
    required: true
  },
  nPlusCPU: {
    type: String,
  },
  nPlusMEM: {
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const NPlus = mongoose.model('NPlus', NPlusSchema);

module.exports = NPlus
