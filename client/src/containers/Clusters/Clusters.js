import React, { Component } from "react";
// import GaugeChart from 'react-gauge-chart'
import axios from "axios";
import { Link } from "react-router-dom";
import PieComponent from "../..//components/Pie/Pie"
import Loading from "../../components/Loading/Loading";
import MEM_Card from "../..//components/MEM_Card/MEM_Card";
// import "./Hosts.css";


class Clusters extends Component {
  state = {
    allData: [],
    loading: true,
    totalmemoryusage: [],
    label: [],
    data: [],
    singlevcentername: [],
    singleclustername: [],


  };

  componentDidMount() {
    this.getBoth();
  }

  getBoth = () => {
    axios
      .get("/api/host/cpu-mem/1")
      .then(allData => {
        let obj = allData.data;
        const array = Object.values(obj);
        // console.log(array);
        this.setState({ allData: array, loading: false });
       
        // console.log(array);
        // let cluster = this.state.allData.filter(
        //   data => data.usage_average === "lab-esxi-01.vdilab.int"
     
        // );
        const memData = this.state.allData.map(data => data.usage_average);
        let memTotal = 0;
          //Add the to values together to make the total
          for ( let i =0; i < memData.length; i++ ) {
            memTotal += memData[i]
          }
        const cpuData = this.state.allData.map(data => data.cpu_usage_average);
        let cputotal = 0;
          //Add the to values together to make the total
          for ( let e =0; e < cpuData.length; e++ ) {
            cputotal += cpuData[e]
          }
        const labelData = this.state.allData.map(data => data.esxhostname);
        const clusterName = this.state.allData.map(data => data.clustername);
        const singleclustername = [...new Set(clusterName)];
        const vcenterName = this.state.allData.map(data => data.vcenter);
        const singlevcentername = [...new Set(vcenterName)];
        
      
      
        // memTotal.push(this.state.data);
        // labelData.push("Total");

        //Set state
        this.setState({ cputotal: cputotal, totalmemoryusage: memTotal, label: labelData, data: memData, singleclustername: singleclustername,  singlevcentername: singlevcentername});
        // console.log(memData);
        // console.log(labelData.length);
        console.log(memTotal);
     
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
                <div className="card card-wrapper">
                  <div className="card main-card">
                    <div className="row header-row">
                      <div className="col-md-7 top-left">
                        <Link to="/hosts">
                          <button className="btn-dark btn-sm">
                            Click to view host details
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-4 top-right">
                        
                      </div>
                    </div>
                    <div className="row button-row">
                      <div className="col-md-sm top-left">
                        <img src="/img/cluster.png" />
                        <div className="host-text-box">
                        <p>Cluster: {this.state.singleclustername}</p>
                        <p>vCenter: {this.state.singlevcentername}</p>
                        <p>Number of ESXi Hosts: {this.state.label.length}</p>
                        </div>
                      </div>
                      <div className="col-sm-4 mem-col">
                      <p>Cluster memory usage by host</p>
                      <PieComponent {...this.state}
                       />
                      </div>
                     
                      <div className="col-md-4 cpu-col">
                      <MEM_Card
                          title="Cluster CPU/MEM Usage"
                          text="CPU Usage:"
                          firstButton={this.state.cputotal}
                          secondButton={this.state.totalmemoryusage}
                        />
                     
                      </div>
                    </div>
                    <p>
                      {/* Device polled @ {moment(host.time).format("h:mm:ss a")} */}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
export default Clusters;
