// Import Links
import React, { Component } from "react";
import axios from "axios";

import Loading from "../../components/Loading/Loading";
import "./Hosts.css";
import HostList from "../../components/HostListView/HostList";



class Hosts extends Component {
  // State on Hosts
  state = {
    allData: [],
    loading: true,
    listView: true
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
    return (
      <>
        {this.state.loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="wrapper">
            <div>
              
              <HostList hostData={this.state.allData} cardHandler={() => {
                  this.setState({ listView: false });
                }} view={this.state.listView} listHandler={() => {
                  this.setState({ listView: true });
                }}/>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Hosts;

