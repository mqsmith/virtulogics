import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PieComponent from "../..//components/Pie/Pie";
import Loading from "../../components/Loading/Loading";
import Dual_Button_Card from "../..//components/Dual_Button_Card/";
import ClusterChartContainer from "../../components/ClusterChart/ClusterChartContainer";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "./Clusters.css";

const needDominantBaselineFix = true;

class Clusters extends Component {
  state = {
    allData: [],
    loading: true,
    totalmemoryusage: [],
    label: [],
    data: [],
    singlevcentername: [],
    singleclustername: []
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
        let combined = [];

        for (let i = 0; i < this.state.allData.length; i++) {
          // console.log(this.state.allData[i].usage_average)
          combined.push(this.state.allData[i].usage_average);
        }
        // console.log(combined);

        // console.log(array);
        // let cluster = this.state.allData.filter(
        //   data => data.usage_average === "lab-esxi-01.vdilab.int"

        // );
        const memData = this.state.allData.map(data => data.usage_average);
        let memTotal = 0;
        //Add the to values together to make the total
        for (let i = 0; i < memData.length; i++) {
          memTotal += memData[i];
        }
        const cpuData = this.state.allData.map(data => data.cpu_usage_average);
        let cputotal = 0;
        //Add the to values together to make the total
        for (let e = 0; e < cpuData.length; e++) {
          cputotal += cpuData[e];
        }

        const labelData = this.state.allData.map(data => data.esxhostname);
        const clusterName = this.state.allData.map(data => data.clustername);
        const singleclustername = [...new Set(clusterName)];
        const vcenterName = this.state.allData.map(data => data.vcenter);
        const singlevcentername = [...new Set(vcenterName)];
        const memCapcity = this.state.allData.map(
          data => data.totalCapacity_average
        );
        let clusterMemTotal = 0;
        //Add the to values together to make the total
        for (let f = 0; f < memCapcity.length; f++) {
          clusterMemTotal += memCapcity[f];
        }
        let hostmemory = 28383;
        let totalhosts = labelData.length;
        let totalclustermemory = ((hostmemory * memTotal) / 100000).toFixed(2);
        console.log("This is the MEM total");
        console.log(totalclustermemory);
        let n1mem = ((64 - totalclustermemory) / 32).toFixed(2);
        console.log(n1mem);

        const cpuUsage = this.state.allData.map(data => data.usagemhz_average);
        let clusterCpuTotal = 0;
        //Add the to values together to make the total
        for (let f = 0; f < cpuUsage.length; f++) {
          clusterCpuTotal += cpuUsage[f];
        }

        const cpuUsagePer = this.state.allData.map(
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
        console.log("This is the CPU total");
        console.log(clusterCpuTotal);
        console.log(totalclustercpu);
        let n1cpu = totalclustercpu;
        console.log(clusterusagetotal);

        // memTotal.push(this.state.data);
        // labelData.push("Total");

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
          singlevcentername: singlevcentername
        });
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
        <div className="wrapper">

          <div className="title-row shadow mb-3 bg-white rounded">
            <p className="page-title">Cluster: {this.state.singleclustername}</p>
          </div>

          <div className="row">

            <div className="col-md-2">
            <Link to="/hosts">
             <button className="btn-dark btn-sm link-button">
             Click to view "Hosts"
            </button>
            </Link>

            <div className="card host-card">   
            <div id="inner" className="card-header">
            Cluster Information
            </div>
              <p className="bold-text host-text">vCenter:</p>
              <p className="host-text">{this.state.singlevcentername}</p>
              </div>
              </div>

            <div className="col-md-2">
            <div className="card host-card">
            <div id="inner" className="card-header">
            Memory Usage
            </div>
              <CircularProgressbar
                value={this.state.totalmemoryusage}
                text={
                  <tspan
                    className="progress"
                    dy={needDominantBaselineFix ? -15 : 0}
                  >
                    {this.state.totalmemoryusage}%
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
                value={this.state.clusterusagetotal}
                text={
                  <tspan
                    className="progress"
                    dy={needDominantBaselineFix ? -15 : 0}
                  >
                    {this.state.clusterusagetotal}%
                  </tspan>
                }
              />
             </div>
            </div>

            <div className="col-md-2">
            <div className="card host-card">
            <div id="inner" className="card-header">
            ESXi Hosts
            </div>
            <h3>            
            {this.state.label.length}
            </h3>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card host-card">
            <div id="inner" className="card-header">
            Cluster memory usage by host
            <PieComponent {...this.state} />
            </div>
            </div>
            </div>

          </div>

          <div className="row">
          
          <div className="col-md-2">
            <div className="card host-card">
            <div id="inner" className="card-header">
            N+1 MEM
            </div>
            <h4>            
            {this.state.n1mem}
            </h4>
            </div>
            </div>

         

            <div className="col-md-2">
            <div className="card host-card">
            <div id="inner" className="card-header">
            N+1 CPU
            </div>
            <h4>            
            {this.state.n1cpu}
            </h4>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card host-card">
            <div id="inner" className="card-header">
            CPU Performance
            </div>
                <div className="row">
                  <div className="col">
                    <p className="triple-label">
                      CPU Ready
                    </p>
                    <p className="triple">
                      2%
                    </p>
                  </div>
                  <div className="col">
                  <p className="triple-label">
                      CO-Stop
                    </p>
                    <p className="triple">
                      3%
                    </p>
                  </div>
                  <div className="col">
                  <p className="triple-label">
                      Latency Avg.
                    </p>
                    <p className="triple">
                      .54
                    </p>
                  </div>
                </div>
            </div>
            </div>


           
          </div>
         
          <div className="card host-card chart">
          <ClusterChartContainer />
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
export default Clusters;
