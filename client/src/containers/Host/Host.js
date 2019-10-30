import React, { Component } from "react";
// import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../../components/Loading/Loading";
// import "./Hosts.css";
import MEM_Card from "../..//components/MEM_Card/MEM_Card";
import CPU_Card from "../..//components/CPU_Card/CPU_Card";

class Host extends Component {
  
  state = {
    allData: [],
    loading: true
  };

  componentDidMount() {
    console.log("Host props: ", this.props);
    this.getBoth();
  }

  componentDidUpdate(prevProps){
    console.log("Host updated props: ", this.props);
  }

  getBoth = () => {
    axios
    .get("/api/host/cpu-mem/1/" + this.props.match.params.esxhostname) 
    // .get("/api/host/cpu-mem/1/")
      .then(allData => {
        let obj = allData.data;
        const array = Object.values(obj);
        // console.log(array);
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
    let content;
    if (this.state.loading) {
      content = (
        <div className="loading">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.allData.map((host, i) => (
                <div className="card card-wrapper">
                  <div key={host.moid} className="card main-card">
                    <div className="row header-row">
                      <div className="col-md-7 top-left">
                        <Link to="/hosts">
                          <button className="btn-dark btn-sm">
                            Click to back to the hosts view
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-4 top-right"></div>
                    </div>
                    <div className="row button-row">
                      <div className="col-md-4 top-left">
                        <img src="https://assets.webiconspng.com/uploads/2017/09/Server-PNG-Image-23361.png" />
                        <div className="host-text-box">
                          <p>Host: {host.esxhostname}</p>
                          <p>Cluster: {host.clustername}</p>
                          <p>vCenter: {host.vcenter}</p>
                          <p>CPU Ready: {host.utilization_average} </p>
                        </div>
                      </div>
                      <div className="col-md-4 mem-col">
                        <MEM_Card
                          totalCapacity_average={(
                            (host.totalCapacity_average * host.usage_average) /
                            100000
                          ).toFixed(2)}
                          usage_average={host.usage_average}
                        />
                      </div>
                      <div className="col-md-4 cpu-col">
                        <CPU_Card
                          usagemhz_average={host.usagemhz_average}
                          utilization_average={host.cpu_usage_average}
                        />
                      </div>
                    </div>
                    <p>
                      Device polled @ {moment(host.time).format("h:mm:ss a")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
export default Host;
