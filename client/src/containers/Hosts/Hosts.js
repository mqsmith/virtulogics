// Import Links
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../../components/Loading/Loading";
import "./Hosts.css";
import { CircularProgressbar } from "react-circular-progressbar";

const needDominantBaselineFix = true;

class Hosts extends Component {
  // State on Hosts
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
      .get("/api/host/cpu-mem/1")
      .then(allData => {
        let obj = allData.data;
        const array = Object.values(obj);
        this.setState({ allData: array, loading: false });
        console.log(this.state.allData[0].esxhostname);
        console.log(this.state.allData[0].totalCapacity_average);
        console.log(this.state.allData[0].usage_average);
        console.log(
          (
            (this.state.allData[0].totalCapacity_average *
              this.state.allData[0].usage_average) /
            100000
          ).toFixed(2)
        );
        let used =
          (this.state.allData[0].totalCapacity_average *
            this.state.allData[0].usage_average) /
          100000;
        console.log(used.toFixed(2));
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
      // Styling Hosts Component with Bootstrap classNames
      return (
        <div className="wrapper">
          {this.state.allData.map((host, i) => (
            <div className="host">
              <div className="title-row shadow mb-3 bg-white rounded">
                <p className="page-title">Host: {host.esxhostname}</p>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <Link to={`/host/${host.esxhostname}`}>
                    <button className="btn-dark btn-sm link-button">
                      View Single Host Details
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
                        <tspan
                          className="progress"
                          dy={needDominantBaselineFix ? -15 : 0}
                        >
                          {host.usage_average}%
                        </tspan>
                      }
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
                        <tspan
                          className="progress"
                          dy={needDominantBaselineFix ? -15 : 0}
                        >
                          {(
                      (host.totalCapacity_average * host.usage_average) /
                      100000
                    ).toFixed(2)}GB
                        </tspan>
                      }
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
                        <tspan
                          className="progress"
                          dy={needDominantBaselineFix ? -15 : 0}
                        >
                          {host.cpu_usage_average}%
                        </tspan>
                      }
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
                        <p className="triple-label">CPU Ready</p>
                        {host.utilization_average < 5 ? (
                        <div className="triple normal">
                        <h4>{host.utilization_average}%</h4>
                        </div>
                        ) : (
                        <div className="triple warning ">
                        <h4>{host.utilization_average}%</h4>
                        </div>
                        )}
          
                      </div>
                      <div className="col">
                        <p className="triple-label">CO-Stop</p>
        
                        {host.costop_summation < 5 ? (
                        <div className="triple normal">
                        <h4>{host.costop_summation}</h4>
                        </div>
                        ) : (
                        <div className="triple warning ">
                        <h4>{host.costop_summation}</h4>
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
            </div>
          ))}
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
// Export Link
export default Hosts;