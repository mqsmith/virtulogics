// Import Links
import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import ClusterLineChart from "../LineChart/ClusterLineChart";

class ClusterChartContainer extends Component {
  // State on ClusterChartContainer
  intervalID;
  state = {
    hostOneCpuData: [],
    hostOneMemData: [],
    hostOneLabels: [],
    hostTwoCpuData: [],
    hostTwoMemData: [],
    hostTwoLabels: [],
    time: []
  };

  componentDidMount() {
    this.getMem();
    this.getCpu();
  }

  getMem = () => {
    axios
      .get("/api/host/mem/1day")
      .then(hostMemData => {
         const {
            memUsageOne,
            memUsageTwo,
          } = hostMemData.data.data;
                  this.setState({
                    hostOneMemData: memUsageOne,
                    hostTwoMemData: memUsageTwo,
                  });
          this.intervalID = setTimeout(this.getMem.bind(this), 30000);
        })
      .catch(err => {
        console.log(err);
      });
  };

  getCpu = () => {
    axios
      .get("/api/host/cpu/1day")
      .then(hostCpuData => {
        const {
          cpuUsageOne,
          cpuUsageTwo,
          hostName,
          time
        } = hostCpuData.data.data;
        let hostNameOne = hostName.filter(data => data === "lab-esxi-01.vdilab.int");
        let hostNameTwo = hostName.filter(data => data === "lab-esxi-02.vdilab.int");
        let formattedTime = time.map(time => moment(time).format("M/D, ha"));
                this.setState({
                  hostOneCpuData: cpuUsageOne,
                  hostOneLabels: hostNameOne,
                  hostTwoCpuData: cpuUsageTwo,
                  hostTwoLabels: hostNameTwo,
                  time:formattedTime
                });
        this.intervalID = setTimeout(this.getCpu.bind(this), 30000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Styling ClusterChartContainer Component with Bootstrap classNames
  render() {
    return (
      <>
        <div className="main chart-wrapper container">
          <ClusterLineChart
            label={"Host MEM Usage Average"}
            hostOneData={this.state.hostOneMemData}
            hostTwoData={this.state.hostTwoMemData}
            hostOneLabels={this.state.hostOneLabels[0] + " MEM Usage Average"}
            hostTwoLabels={this.state.hostTwoLabels[0] + " MEM Usage Average"}
            time={this.state.time}
            color="#3E517A"
          />
        <div className="main chart-wrapper container">
                    
          <ClusterLineChart
            label={"Host CPU Usage Average"}
            hostOneData={this.state.hostOneCpuData}
            hostTwoData={this.state.hostTwoCpuData}
            hostOneLabels={this.state.hostOneLabels[0] + " CPU Usage Average"}
            hostTwoLabels={this.state.hostTwoLabels[0] + " CPU Usage Average"}
            time={this.state.time}
            color="#3E517A"
          />
                  
        </div>              
        </div>
              
      </>
    );
  }
}

// Export Links
export default ClusterChartContainer;