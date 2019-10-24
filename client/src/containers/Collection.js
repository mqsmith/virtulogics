import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import LineChart from "../components/LineChart"

class Collection extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getRam();
  }

  getRam = () => {
    axios
      .get("/api/host-mem/1")
      .then(hostMemData => {
        console.log(hostMemData.data.data);
        this.setState({ data: hostMemData.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
        <h1>Collection of Hosts</h1>
        {console.log(this.state.data.data)}
        {/* <div className="main chart-wrapper">
          <LineChart
            label={this.state.data}
            title={this.state.data}
            {...this.state}
            color="#3E517A"
          />
        </div> */}
        {this.state.data.map((host, i) => (
          <div className="card">
          <div className="card-body">
          <div key={host.esxhostname}>
            <p>Cluster Name: {host.clustername}</p>
            <p>Host Name: {host.esxhostname}</p>
        
            <button className="btn btn-success" >
            <p>MEM Usage:</p>
            {host.usage_average}
           </button>
        
           <button className="btn btn-success" >
           <p>MEM Capacity:</p>
            {`${host.totalCapacity_average} `}
           </button>
            {/* <p>Ram Usage Average: {host.usage_average}</p> */}
            {/* <p>Total Capacity Average: {host.totalCapacity_average}</p> */}
            <p>Time: {moment(host.time).format("h:mm:ss a")}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Collection;
