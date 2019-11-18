const mongoose = require('mongoose'); //bring in Mongoose

const NPlusSchema = new mongoose.Schema({    //create a schema
  clusterName: {
    type: String,
    required: true,
    unique: false
  },
  n1cpu: {
    type: String,
    required: true
  },
  n1mem: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const NPlus = mongoose.model('NPlus', NPlusSchema);

module.exports = NPlus
