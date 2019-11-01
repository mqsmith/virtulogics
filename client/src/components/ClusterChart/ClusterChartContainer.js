import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import ClusterLineChart from "../LineChart/ClusterLineChart";

class ClusterChartContainer extends Component {
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
         // console.log(hostCpuData.data.data);
         const {
            memUsageOne,
            memUsageTwo,
            hostName,
            time
          } = hostMemData.data.data;
        //   let hostNameOne = hostName.filter(data => data === "lab-esxi-01.vdilab.int");
        //   let hostNameTwo = hostName.filter(data => data === "lab-esxi-02.vdilab.int");
        //   let formattedTime = time.map(time => moment(time).format("M/D, ha"));
          console.log(hostName);
                  this.setState({
                    hostOneMemData: memUsageOne,
        //             hostOneLabels: hostNameOne,
                    hostTwoMemData: memUsageTwo,
        //             hostTwoLabels: hostNameTwo,
        //             time:formattedTime
                  });
        //           console.log(this.state);
        })
      .catch(err => {
        console.log(err);
      });
  };

  getCpu = () => {
    axios
      .get("/api/host/cpu/1day")
      .then(hostCpuData => {
        // console.log(hostCpuData.data.data);
        const {
          cpuUsageOne,
          cpuUsageTwo,
          hostName,
          time
        } = hostCpuData.data.data;
        let hostNameOne = hostName.filter(data => data === "lab-esxi-01.vdilab.int");
        let hostNameTwo = hostName.filter(data => data === "lab-esxi-02.vdilab.int");
        let formattedTime = time.map(time => moment(time).format("M/D, ha"));
        console.log(hostName);
                this.setState({
                  hostOneCpuData: cpuUsageOne,
                  hostOneLabels: hostNameOne,
                  hostTwoCpuData: cpuUsageTwo,
                  hostTwoLabels: hostNameTwo,
                  time:formattedTime
                });
        //         console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // usage = this.state.data.filter(({ RAM_Usage }) => RAM_Usage !== null);
    // console.log(usage);
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

export default ClusterChartContainer;
