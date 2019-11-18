// Import Links
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PieComponent from "../..//components/Pie/Pie";
import Loading from "../../components/Loading/Loading";
import ClusterChartContainer from "../../components/ClusterChart/ClusterChartContainer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Clusters.css";

class Clusters extends Component {
  // State on Cluester Component
  intervalID;

  state = {
    alldata: [],
    loading: true,
    totalmemoryusage: [],
    label: [],
    data: [],
    singlevcentername: [],
    singleclustername: [],
    showhostchart: undefined,
    n1cpu: "",
    n1mem: ""
  };

  componentDidMount() {
    this.getBoth();
  }

  // Axios Call

  nPLus = () => {
    console.log(this.state.n1mem);
    console.log(this.state.n1cpu);
    axios
      .post("/api/cluster/nPlus", this.state)
      .then(response => {
        console.log(response);
        // if(response.data.error){
        //   alert("Failed to create" + response.data.message);
        // }else{
        //   // this.props.history.push('/collection/' + response.data.data._id);
        // } 
      })
      .catch(err => {
        console.log(err);
        // alert("Failed to create: " + err.message);
      });
  };

  getBoth = () => {
    axios
      .get("/api/host/cpu-mem/1")
      .then(alldata => {
        let obj = alldata.data;
        const array = Object.values(obj);
        this.setState({ alldata: array, loading: undefined });
        let combined = [];

        for (let i = 0; i < this.state.alldata.length; i++) {
          combined.push(this.state.alldata[i].usage_average);
        }

        const memData = this.state.alldata.map(data => data.usage_average);
        let memTotal = 0;
        //Add the to values together to make the total
        for (let i = 0; i < memData.length; i++) {
          memTotal += memData[i];
        }
        const cpuData = this.state.alldata.map(data => data.cpu_usage_average);
        let cputotal = 0;
        //Add the to values together to make the total
        for (let e = 0; e < cpuData.length; e++) {
          cputotal += cpuData[e];
        }
        const cpuReady = this.state.alldata.map(data => data.ready_summation);
        let readyTotal = 0;
        //Add the to values together to make the total
        for (let f = 0; f < cpuReady.length; f++) {
          readyTotal += cpuReady[f];
        }
        let cpureadytotal = ((readyTotal / (20 * 1000)) * 100).toFixed(2);

        const costopData = this.state.alldata.map(
          data => data.cpu_usage_average
        );
        let cototal = 0;

        //Add the to values together to make the total
        for (let e = 0; e < costopData.length; e++) {
          cototal += costopData[e];
        }
        let costoptotal = (cototal / 1000).toFixed(2);
        const labelData = this.state.alldata.map(data => data.esxhostname);
        const clusterName = this.state.alldata.map(data => data.clustername);
        const singleclustername = [...new Set(clusterName)];
        const vcenterName = this.state.alldata.map(data => data.vcenter);
        const singlevcentername = [...new Set(vcenterName)];

        let hostmemory = 28383;
        let totalclustermemory = (hostmemory * memTotal) / 100000;
        let n1mem = ((64 - totalclustermemory) / 32).toFixed(2);

        const cpuUsage = this.state.alldata.map(data => data.usagemhz_average);
        let clusterCpuTotal = 0;
        //Add the to values together to make the total
        for (let f = 0; f < cpuUsage.length; f++) {
          clusterCpuTotal += cpuUsage[f];
        }

        const cpuUsagePer = this.state.alldata.map(
          data => data.cpu_usage_average
        );
        let clusterusagetotal = 0;
        //Add the to values together to make the total
        for (let g = 0; g < cpuUsagePer.length; g++) {
          clusterusagetotal += cpuUsagePer[g];
        }

        let hostcpu = 17.552;
        let totalcpu = 35.104;

        let totalclustercpu = (
          (totalcpu - clusterCpuTotal / 1000) /
          hostcpu
        ).toFixed(2);
        let n1cpu = totalclustercpu;
          
        //Set state
        this.setState({
          clusterusagetotal: clusterusagetotal.toFixed(2),
          clustercputotal: clusterCpuTotal,
          n1cpu: n1cpu,
          totalclustermemory: totalclustermemory,
          n1mem: n1mem,
          cputotal: cputotal,
          totalmemoryusage: memTotal.toFixed(2),
          label: labelData,
          data: memData,
          singleclustername: singleclustername,
          singlevcentername: singlevcentername,
          cpureadytotal: cpureadytotal,
          costoptotal: costoptotal
        });
        
        console.log(this.state.n1cpu);
        console.log(this.state.n1mem);
        this.nPLus()
        this.intervalID = setTimeout(this.getBoth.bind(this), 30000);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    // Loading Screen Logic
    let content;
    if (this.state.loading) {
      content = (
        <div className="loading">
          <Loading />
        </div>
      );
    } else {
      // Styling Clusters Component with Bootstrap classNames
      return (
        <div id="wrapper" className="wrapper">
          <div className="title-row shadow mb-3 bg-white rounded">
            <p className="page-title">
              Cluster: {this.state.singleclustername}
            </p>
          </div>

          <div className="row">
            <div className="col-md-2">
              <Link to="/hosts">
                <button className="btn-dark btn-sm link-button">
                  Click to view "Hosts"
                </button>
              </Link>
              {this.state.showhostchart ? (
                <></>
              ) : (
                <button
                  className="btn-dark btn-sm link-button"
                  onClick={() => {
                    this.setState({ showhostchart: "true" });
                  }}
                >
                  View Host CPU and MEM Usage
                </button>
              )}

              <div className="card host-card">
                <div id="inner" className="card-header">
                  Cluster Information
                </div>
                <p className="bold-text host-text">vCenter:</p>
                <p className="host-text">{this.state.singlevcentername}</p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="card single-card">
                <div id="inner" className="card-header">
                  Memory Usage
                </div>
                <CircularProgressbar
                  value={this.state.totalmemoryusage}
                  text={
                    <tspan className="progress">
                      {this.state.totalmemoryusage}%
                    </tspan>
                  }
                  styles={{
                    background: {
                      fill: "black",
                      transform: "scale(0.8)",
                      transformOrigin: "center center"
                    },
                    path: {
                      transform: "rotate(180deg)",
                      transformOrigin: "center center",
                      filter: "drop-shadow(10px 10px 20px lightgray)",
                      strokeLinecap: "butt",
                      stroke:
                        this.state.totalmemoryusage >= 50 ? "red" : "#2B4560"
                    },
                    root: {
                      filter: "drop-shadow(10px 10px 20px lightgray)"
                    },
                    trail: {
                      strokeWidth: 8
                    },
                    text: {
                      fontSize: 22,
                      fontWeight: 800,
                      filter: "drop-shadow(10px 10px 20px lightgray)",
                      animation: "fadein 2s",
                      fill:
                        this.state.totalmemoryusage >= 50 ? "red" : "#2B4560"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="card single-card">
                <div id="inner" className="card-header">
                  CPU Usage
                </div>
                <CircularProgressbar
                  value={this.state.clusterusagetotal}
                  text={
                    <tspan className="progress">
                      {this.state.clusterusagetotal}%
                    </tspan>
                  }
                  styles={{
                    background: {
                      fill: "black",
                      transform: "scale(0.8)",
                      transformOrigin: "center center"
                    },
                    path: {
                      transform: "rotate(180deg)",
                      transformOrigin: "center center",
                      strokeLinecap: "butt",
                      stroke:
                        this.state.clusterusagetotal >= 70 ? "red" : "#2B4560"
                    },
                    root: {
                      filter: "drop-shadow(10px 10px 20px lightgray)"
                    },
                    trail: {
                      strokeWidth: 8
                    },
                    text: {
                      fontSize: 22,
                      fontWeight: 800,
                      filter: "drop-shadow(10px 10px 20px lightgray)",
                      animation: "fadein 5s",
                      fill:
                        this.state.clusterusagetotal >= 70 ? "red" : "#2B4560"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="card single-card">
                <div id="inner" className="card-header">
                  ESXi Hosts
                </div>
                <div className="normal">
                  <h4>{this.state.label.length}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card double-card">
                <PieComponent {...this.state} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <div
                className="card single-card"
                id="nPlusMEM"
                value={this.state.n1mem}
              >
                <div id="inner" className="card-header">
                  N+1 MEM
                </div>
                {this.state.n1mem > 1 ? (
                  <div className="normal">
                    <h4>{this.state.n1mem}</h4>
                  </div>
                ) : (
                  <div className="warning">
                    <h4>{this.state.n1mem}</h4>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-2">
              <div
                className="card single-card"
                id="nPlusCPU"
                value={this.state.n1cpu}
              >
                <div id="inner" className="card-header">
                  N+1 CPU
                </div>
                {this.state.n1cpu > 1 ? (
                  <div className="normal">
                    <h4>{this.state.n1cpu}</h4>
                  </div>
                ) : (
                  <div className="warning">
                    <h4>{this.state.n1cpu}</h4>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-3">
              <div className="card double-card">
                <div id="inner" className="card-header">
                  CPU Performance
                </div>
                <div className="row">
                  <div className="col">
                    <p className="double-label">CPU Ready</p>
                    {this.state.cpureadytotal < 5 ? (
                      <div className="double normal">
                        <h4>{this.state.cpureadytotal}%</h4>
                      </div>
                    ) : (
                      <div className="double warning ">
                        <h4>{this.state.cpureadytotal}%</h4>
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <p className="double-label">CO-Stop (Sec)</p>
                    {this.state.costoptotal < 5 ? (
                      <div className="double normal">
                        <h4>{this.state.costoptotal}</h4>
                      </div>
                    ) : (
                      <div className="double warning ">
                        <h4>{this.state.costoptotal}%</h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.showhostchart ? (
            <div className="card host-card chart">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  this.setState({ showhostchart: undefined });
                }}
              >
                Hide Host Mem and CPU Usage
              </button>
              <ClusterChartContainer />
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

// Export Link
export default Clusters;
