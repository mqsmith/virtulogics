import React, { Component } from "react";
// import Moment from "react-moment";
import axios from "axios";
// import { Link } from "react-router-dom";
import MEM_Button from "../components/MEM_Button/MEM_Button";
import CPU_Button from "../components/CPU_Button/CPU_Button";

// import LineChart from "../components/LineChart";

class Cluster extends Component {
  state = {
    cpuData: [],
    memData: []
  };

  componentDidMount() {
    this.getClusterCpu();
    this.getClusterMem();
    // this.getCluster();
  }

  getClusterCpu = () => {
    axios
      .get("/api/host-cpu/1")
      .then(cluster => {
        console.log(cluster.data.data);
        this.setState({ cpuData: cluster.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  getClusterMem = () => {
    axios
      .get("/api/host-mem/1")
      .then(cluster => {
        console.log(cluster.data.data);
        this.setState({ memData: cluster.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render() {
    return (
      <div>
        <h1>Cluster View</h1>
          {console.log(this.state.cpuData.data)}
          <div class="card">
          <div class="card-body">
          {this.state.cpuData.map((cpu, i) => (
         
            <CPU_Button {...cpu} CPU_value1={cpu.usagemhz_average}/>,
            <CPU_Button {...cpu} CPU_value2={cpu.utilization_average}/>
            ))}
          {this.state.memData.map((mem, i) => (
            <MEM_Button {...mem} MEM_value1={mem.usage_average}/>,
            <MEM_Button {...mem} MEM_value2={mem.totalCapacity_average}/>
          ))}
            {/* <div class="card">
            <div class="card-body">
            <div class="card-header">Host Name: {cpu.esxhostname}</div>
            <div key={cpu.esxhostname}>
            <p>Host Name: {cpu.esxhostname}</p>
            <p>CPU Usage:</p>
            <a href="#" className= "btn btn-success"> {cpu.usagemhz_average} Mhz </a>
            
            <p>MEM Usage: {cpu.usagemhz_averag}</p> */}
            {/* <p>Time: {Moment(host.time).format("h:mm:ss a")}</p> */}
           
            <a href="#" class="btn btn-primary"> Go somewhere </a>
          </div>
 
        </div>
        </div>
      
      // </div>
    );
  }
}

export default Cluster;
