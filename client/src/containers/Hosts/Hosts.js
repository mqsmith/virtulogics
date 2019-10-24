import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import LineChart from "../../components/LineChart";
import "./Hosts.css";
import MEM_Card from "../..//components/MEM_Card/MEM_Card";
import CPU_Card from "../..//components/CPU_Card/CPU_Card";

class Hosts extends Component {
  state = {
    memData: [],
    cpuData: [],
    usedMem: 0
  };

  componentDidMount() {
    this.getRam();
    this.getCpu();
  }

  getRam = () => {
    axios
      .get("/api/host-mem/1")
      .then(hostMemData => {
        // console.log(hostMemData.data);
        this.setState({ memData: hostMemData.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getCpu = () => {
    axios
      .get("/api/host-cpu/1")
      .then(hostCpuData => {
        // console.log(hostCpuData.data);
        this.setState({ cpuData: hostCpuData.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //   console.log(this.state.)
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          {this.state.memData.map((host, i) => (
            <div className="card">
              <div className="card-body">
                <p>Located in {host.clustername}</p>
                <p>Host Name: {host.esxhostname}</p>
                <MEM_Card
                  totalCapacity_average={host.totalCapacity_average}
                  usage_average={host.usage_average}
                />
                <p>Device polled @ {moment(host.time).format("h:mm:ss a")}</p>
              </div>
            </div>
          ))}
          </div>

      
        <div className="col-md-6">
          {this.state.cpuData.map((host, i) => (
            <div className="card">
              <div className="card-body">
                <p>vCenter {host.vcenter}</p>
                <p>CPU Ready: {host.utilization_average}</p>
                <CPU_Card
                  usagemhz_average={host.usagemhz_average}
                  utilization_average={host.utilization_average}
                />
                <p>Device polled @ {moment(host.time).format("h:mm:ss a")}</p>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    
    );
  }
}

export default Hosts;
