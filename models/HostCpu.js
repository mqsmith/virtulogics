const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostCpuSchema = new Schema({
  name: { type: String, required: true },
  fields: {
    usage_average: { type: mongoose.Decimal128, required: true },
    coreUtilization_average: { type: mongoose.Decimal128, required: true },
    utilization_average: { type: mongoose.Decimal128, required: true }
  },
  tags: {
    cpu: { type: String, required: true },
    esxhostname: { type: String, required: true },
    vcenter: { type: String, required: true }
  },
  timestamp: { type: Number, required: true }
});

const HostCpu = mongoose.model("HostCpu", hostCpuSchema);

module.exports = HostCpu;
