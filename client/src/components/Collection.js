import React, { Component } from "react";
// import Moment from "react-moment";
import axios from "axios";
// import { Link } from "react-router-dom";
// import moment from "moment";
// import BarChart from "../components/BarChart"
import moment from "moment";
import LineMemChart from "./LineMemChart";
import LineCpuChart from "./LineCpuChart"

class Collection extends Component {
  state = {
    hostMemData: [],
    hostLabels: "",
    hostCpuLabels: "",
    hostCPUData: [],
    time: []
  };

  componentDidMount() {
    this.getSevenDayMem();
    this.getSevenDayCpu();
    // console.log(this.ramUsage);
  }

  getSevenDayMem = (props) => {
    axios
      .get("/api/host/mem/7days/" + this.props.hostName)
      .then(hostMemData => {
        const { time, hostData} = hostMemData.data.data
        // console.log(time);
        let formattedTime = time.map(time => moment(time).format("M/D/YY, h:mm a"));
        // console.log(formattedTime);
        this.setState({
          hostData: hostData,
          hostLabels: this.props.hostName + " Mem usage",
          time: formattedTime
        });
        // console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  getSevenDayCpu = (props) => {
    axios
      .get("/api/host/cpu/7days/" + this.props.hostName)
      .then(hostCPUData => {
        const {hostCpuData} = hostCPUData.data.data
        // console.log(hostCPUData);
        // let formattedTime = time.map(time => moment(time).format("M/D/YY, h:mm a"));
        // console.log(formattedTime);
        this.setState({
          hostCpuData: hostCpuData,
          hostCpuLabels: this.props.hostName + " CPU usage",
          // time: formattedTime
        });
        // console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="main chart-wrapper container">
          <LineMemChart
            label={"Host MEM Usage Average"}
            hostData={this.state.hostData}
            hostLabels={this.state.hostLabels}
            time={this.state.time}
            color="rgba(255, 0, 0, 0.68)"
          />
        </div>
        <div className="main chart-wrapper container">
          <LineCpuChart
            label={"Host MEM Usage Average"}
            hostData={this.state.hostCpuData}
            hostLabels={this.state.hostCpuLabels}
            time={this.state.time}
            color="rgba(0, 149, 255, 0.68)"
          />
        </div>
      </>
    );
  }
}

export default Collection;
