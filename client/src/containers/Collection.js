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
      .get("/api/chart-mem")
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
        <div className="main chart-wrapper">
          <LineChart
            data={this.state.data.RAM_Usage}
            label={this.state.data.esxhostname}

            color="#3E517A"
          />
        </div>
        {/* {this.state.data.map((host, i) => (
          <div key={host.esxhostname}>
            <p>Cluster Name: {host.clustername}</p>
            <p>Host Name: {host.esxhostname}</p>
            <p>Ram Usage Average: {host.RAM_Usage}</p>
            <p>Total Capacity Average: {host.totalCapacity_average}</p>
            <p>Time: {moment(host.time).format("h:mm:ss a")}</p>
            
          </div>
        ))} */}
      </div>
    );
  }
}

export default Collection;
