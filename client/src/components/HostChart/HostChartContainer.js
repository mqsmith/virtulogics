// Import Links
import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import LineMemChart from "../LineChart/LineMemChart";
import LineCpuChart from "../LineChart/LineCpuChart"

class HostChartContainer extends Component {
  // State on HostChartContainer
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
        let formattedTime = time.map(time => moment(time).format("M/D, ha"));
        this.setState({
          hostData: hostData,
          hostLabels: this.props.hostName + " MEM utilization",
          time: formattedTime
        });
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
        this.setState({
          hostCpuData: hostCpuData,
          hostCpuLabels: this.props.hostName + " CPU utilization",
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Styling HostChartContainer Component with Bootstrap classNames
  render() {
    return (
      <>
        <div className="main chart-wrapper container">
          <LineMemChart
            label={"Host MEM Usage Average"}
            hostData={this.state.hostData}
            hostLabels={this.state.hostLabels}
            time={this.state.time}
            color="rgba(106, 164, 176, .68)"
          />
        </div>
        <div className="main chart-wrapper container">
          <LineCpuChart
            label={"Host MEM Usage Average"}
            hostData={this.state.hostCpuData}
            hostLabels={this.state.hostCpuLabels}
            time={this.state.time}
            color="rgba(65, 103, 144, .68)"
          />
        </div>
      </>
    );
  }
}

// Export Link
export default HostChartContainer;