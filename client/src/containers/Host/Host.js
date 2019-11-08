// Import Links
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../../components/Loading/Loading";
import Collection from "../../components/HostChart/HostChartContainer";
import { CircularProgressbar } from "react-circular-progressbar";


class Host extends Component {
  // Start on Host Component
  intervalID;
  state = {
    allData: [],
    loading: true
  };

  componentDidMount() {
    this.getBoth();
  }


  // Axios Call
  getBoth = () => {
    axios
      .get("/api/host/cpu-mem/1/" + this.props.match.params.esxhostname)
      .then(allData => {
        let obj = allData.data;
        const array = Object.values(obj);
        this.setState({ allData: array, loading: false });
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
      // Styling Host Component with Bootstrap classNames
      return (
        <div className="wrapper">
          {this.state.allData.map((host, i) => (
            <div className="host">
              <div className="title-row shadow mb-3 bg-white rounded">
                <p className="page-title">Host: {host.esxhostname}</p>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <Link to="/hosts">
                    <button className="btn-dark btn-sm link-button">
                      Back to "Hosts"
                    </button>
                  </Link>

                  <div className="card host-card">
                    <div id="inner" className="card-header">
                      Host Information:
                    </div>
                    <p className="bold-text host-text">vCenter:</p>
                    <p className="host-text">{host.vcenter}</p>
                    <p className="bold-text host-text">Cluster:</p>
                    <p className="host-text">{host.clustername}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card host-card">
                    <div id="inner" className="card-header">
                      Memory Usage
                    </div>
                    <CircularProgressbar
                      value={host.usage_average}
                      text={
                        <tspan className="progress">
                          {host.usage_average}%
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
                          stroke: host.usage_average >= 50 ? "red" : "#2B4560"
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
                          fill: host.usage_average >= 50 ? "red" : "#2B4560"
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card host-card">
                    <div id="inner" className="card-header">
                      MEM Usage (GB)
                    </div>
                    <CircularProgressbar
                      value={(
                        (host.totalCapacity_average * host.usage_average) /
                        100000
                      ).toFixed(2)}
                      text={
                        <tspan className="progress">
                          {(
                            (host.totalCapacity_average * host.usage_average) /
                            100000
                          ).toFixed(2)}
                          GB
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
                            (host.totalCapacity_average * host.usage_average) /
                              100000 >=
                            25
                              ? "red"
                              : "#2B4560"
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
                            (host.totalCapacity_average * host.usage_average) /
                              100000 >=
                            25
                              ? "red"
                              : "#2B4560"
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="card host-card">
                    <div id="inner" className="card-header">
                      CPU Usage
                    </div>
                    <CircularProgressbar
                      value={host.cpu_usage_average}
                      text={
                        <tspan className="progress">
                          {host.cpu_usage_average}%
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
                            host.cpu_usage_average >= 50 ? "red" : "#2B4560"
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
                          fill: host.cpu_usage_average >= 50 ? "red" : "#2B4560"
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card host-card">
                    <div id="inner" className="card-header">
                      Host Performance Stats:
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="double-label">CPU Ready</p>
                        {((host.ready_summation  / (20 * 1000)) * 100).toFixed(2) < 5 ? (
                          <div className="double normal">
                            <h4>{((host.ready_summation  / (20 * 1000)) * 100).toFixed(2)}%</h4>
                          </div>
                        ) : (
                          <div className="double warning ">
                            <h4>{((host.ready_summation  / (20 * 1000)) * 100).toFixed(2)}%</h4>
                          </div>
                        )}
                      </div>
                      <div className="col">
                        <p className="double-label">CO-Stop (Sec)</p>
                        {(host.costop_summation / 1000).toFixed(2) < 5 ? (
                          <div className="double normal">
                            <h4>{(host.costop_summation / 1000).toFixed(2) }</h4>
                          </div>
                        ) : (
                          <div className="double warning ">
                            <h4>{(host.costop_summation / 1000).toFixed(2) }</h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="polled">
                Device polled @ {moment(host.time).format("h:mm:ss a")}
              </p>
              <div className="card host-card chart">
                <Collection hostName={this.props.match.params.esxhostname} />
              </div>
            </div>
          ))}
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
export default Host;
