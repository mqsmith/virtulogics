import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

class Clusters extends Component {
  state = {
    allData: [],
    memUsage: [],
    loading: true
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
        console.log("===================================================================");
        let combined = [];

        for (let i = 0; i < this.state.allData.length; i++) {
          console.log(this.state.allData[i].usage_average)
          combined.push(this.state.allData[i].usage_average);

        }
        console.log(combined);
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
                    <div className="col-md-4 top-left">
                      <img src="https://assets.webiconspng.com/uploads/2017/09/Server-PNG-Image-23361.png" />
                      <div className="host-text-box">
                        <p>Host: </p>
                        <p>Cluster:</p>
                        <p>vCenter: </p>
                        <p>CPU Ready:</p>
                      </div>
                    </div>
                    <div className="col-md-4 mem-col">

                    </div>
                    <div className="col-md-4 cpu-col">

                    </div>
                  </div>
                </div>
              </div>
              )
            </div>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
export default Clusters;