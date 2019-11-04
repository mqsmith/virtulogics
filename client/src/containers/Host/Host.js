// Import Links
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../../components/Loading/Loading";
import Dual_Button_Card from "../..//components/Dual_Button_Card/Dual_Button_Card";
import Collection from "../../components/HostChart/HostChartContainer";

class Host extends Component {
  state = {
    allData: [],
    loading: true
  };

  componentDidMount() {
    console.log("Host props: ", this.props);
    this.getBoth();
  }

  componentDidUpdate(prevProps) {
    console.log("Host updated props: ", this.props);
  }

  getBoth = () => {
    axios
      .get("/api/host/cpu-mem/1/" + this.props.match.params.esxhostname)
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
    let content;
    if (this.state.loading) {
      content = (
        <div className="loading">
          <Loading />
        </div>
      );
    } else {

      // Layout for Host Container
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
                      <div className="image-holder">
                        <img src="/img/host.png" />
                        </div>
                        <div className="host-text-box">
                          <p>Host: {host.esxhostname}</p>
                          <p>Cluster: {host.clustername}</p>
                          <p>vCenter: {host.vcenter}</p>
                          <p>CPU Ready: {host.utilization_average} </p>
                        </div>
                      </div>
                      <div className="col-md-4 mem-col">
                        <Dual_Button_Card
                          title="Host Memory Usage"
                          text1="MEM Usage (GB):"
                          text2="MEM Usage (%):"
                          firstButton={(
                            (host.totalCapacity_average * host.usage_average) /
                            100000
                          ).toFixed(2)}
                          secondButton={host.usage_average}
                        />
                      </div>
                      <div className="col-md-4 cpu-col">
                        <Dual_Button_Card
                          title="Host CPU Usage"
                          text1="CPU Usage (Mhz):"
                          text2="CPU Usage (%):"
                          firstButton={host.usagemhz_average}
                          secondButton={host.cpu_usage_average}
                        />
                      </div>
                    </div>
                    <p>
                      Device polled @ {moment(host.time).format("h:mm:ss a")}
                    </p>
                    <Collection
                      hostName={this.props.match.params.esxhostname}
                    />
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

// Export
export default Host;