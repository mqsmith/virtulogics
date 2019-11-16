import React, { Component } from "react";
import axios from "axios";


class NewConfig extends Component {
  state = {
    clusterName: "",
    hostMem: ""
  };
 
  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("/api/config", this.state)
      .then(response => {
        console.log(response);
        if(response.data.error){
          alert("Failed to create" + response.data.message);
        }else{
          // this.props.history.push('/collection/' + response.data.data._id);
        } 
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the admin page</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="clusterName"
              onChange={this.handleChange}
              name="clusterName"
              value={this.state.clusterName}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="hostMem"
              onChange={this.handleChange}
              name="hostMem"
              value={this.state.hostMem}
            />
          </div>
       
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewConfig;
