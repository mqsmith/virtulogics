import React, { Component } from "react";
// import Moment from "react-moment";
import axios from "axios";
// import { Link } from "react-router-dom";
// import moment from "moment";
// import BarChart from "../components/BarChart"
import moment from "moment";
import LineChart from "../components/LineChart";

class Collection extends Component {
  state = {
    hostOneData: [],
    hostOneLabels: [],
    hostTwoData: [],
    hostTwoLabels: [],
    time: []
  };

  componentDidMount() {
    this.getRam();
    // console.log(this.ramUsage);
  }

  // componentDidUpdate(){
  //   console.log(this.state.data[0].RAM_Usage);
  // }

  getRam = () => {
    axios
      .get("/api/chart-mem")
      .then(hostMemData => {
        console.log(hostMemData.data.data);
        let time = hostMemData.data.data.filter(
          data => data.esxhostname === "lab-esxi-01.vdilab.int"
        );
        const hostOne = hostMemData.data.data.filter(
          data => data.esxhostname === "lab-esxi-01.vdilab.int"
        );
        const hostTwo = hostMemData.data.data.filter(
          data => data.esxhostname === "lab-esxi-02.vdilab.int"
        );
        //  console.log(hostOne);
        //  console.log(hostTwo);
        time = time.map(data => moment(data.time).format("h:mm:ss a"));
        const ramUsageOne = hostOne.map(data => data.RAM_Usage);
        const ramUsageTwo = hostTwo.map(data => data.RAM_Usage);
        const hostNameOne = hostOne.map(data => data.esxhostname);
        const hostNameTwo = hostTwo.map(data => data.esxhostname);
        this.setState({
          hostOneData: ramUsageOne,
          hostOneLabels: hostNameOne,
          hostTwoData: ramUsageTwo,
          hostTwoLabels: hostNameTwo,
          time: time
        });
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
      <>
        {/* <div className="main chart-wrapper">
        <BarChart
          label={"Host MEM Usage Average"}
          data={this.state.data}
          labels={this.state.labels}
          time={this.state.time}
          color="#3E517A"
        />
      </div> */}
        <div className="main chart-wrapper container">
          <LineChart
            label={"Host MEM Usage Average"}
            hostOneData={this.state.hostOneData}
            hostTwoData={this.state.hostTwoData}
            hostOneLabels={this.state.hostOneLabels[0]}
            hostTwoLabels={this.state.hostTwoLabels[0]}
            time={this.state.time}
            color="#3E517A"
          />
        </div>
      </>
    );
  }
}

export default Collection;
