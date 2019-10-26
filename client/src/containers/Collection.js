import React, { Component } from "react";
// import Moment from "react-moment";
import axios from "axios";
// import { Link } from "react-router-dom";
import moment from "moment";
import LineChart from "../components/LineChart";

class Collection extends Component {
  state = {
    data: [],
    labels: [],
    time: []
  };

  

  componentDidMount() {
    this.getRam();
    // console.log(this.ramUsage);
  }

  getRam = () => {
    axios
      .get("/api/host-mem/1")
      .then(hostMemData => {
        // console.log(hostMemData.data.data);
         const ramUsage = hostMemData.data.data.map(data => Math.floor(data.RAM_Usage));
         const hostName = hostMemData.data.data.map(data => data.esxhostname);
         const time = hostMemData.data.data.map(data => moment(data.time).format("h:mm a"));
        //  console.log(ramUsage);
        //  console.log(hostName);
        this.setState({ data: ramUsage, labels: hostName, time: time });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // usage = this.state.data.filter(({ RAM_Usage }) => RAM_Usage !== null);
    // console.log(usage);
    return (
      <div className="main chart-wrapper container">
        <LineChart
          label={"Host RAM Usage mHz"}
          data={this.state.data}
          labels={this.state.labels}
          time={this.state.time}
          color="#3E517A"
        />
      </div>
    ) 
  }
}

export default Collection;
