import React, { Component } from "react";
// import Moment from "react-moment";
import axios from "axios";
// import { Link } from "react-router-dom";
import moment from "moment";
// import LineChart from "../../components/LineChart";
import "./Hosts.css";
import MEM_Card from "../..//components/MEM_Card/MEM_Card";
import CPU_Card from "../..//components/CPU_Card/CPU_Card";

class Hosts extends Component {
  state = {
    allData: [],
    usedMem: ""
  };

  componentDidMount() {
    this.getBoth();
  }
  
  getBoth = () => {
    axios
    .get("/api/host/cpu-mem/1")
    .then(allData => {
      let  obj = allData.data
      const array = Object.values(obj)
      // console.log(array);
      this.setState({ allData: array });
      console.log(this.state.allData[0].totalCapacity_average)
      console.log(this.state.allData[0].mem_usage_average)
      console.log((this.state.allData[0].totalCapacity_average * this.state.allData[0].mem_usage_average / 100 * 1024))
      
    })
    .catch(err => {
      console.log(err);
    });
};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.state.allData.map((host, i) => (
              <div className="card card-wrapper">
                <div  key={host.moid} className="card main-card" onClick={() => alert(`You clicked on a server`)}>
                <div className="row header-row">
          
                <div className="col-md-7 top-left">
              
                  </div>
                  
                <div className="col-md-4 top-right">
                  <p>vCenter {host.vcenter}</p>
                  <p>CPU Ready: {host.utilization_average}</p>
                </div>
                </div>
             
                  <div className="row button-row">
                  <div className="col-md-3 top-left">
                  <img src="https://assets.webiconspng.com/uploads/2017/09/Server-PNG-Image-23361.png" />
                  <p>Host: {host.esxhostname}</p>
                  <p>Cluster: {host.clustername}</p>
                  </div>
                  <div className="col-md-4 mem-col">
                  <MEM_Card
                    totalCapacity_average={host.totalCapacity_average}
                    usage_average={host.usage_average}
                  />
                   </div>
                   <div className="col-md-4 cpu-col">
                  <CPU_Card
                    usagemhz_average={host.usagemhz_average}
                    utilization_average={host.cpu_usage_average}
                  />
                   </div>
                   </div>
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