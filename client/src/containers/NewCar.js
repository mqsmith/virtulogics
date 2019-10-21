import React, { Component } from "react";
import axios from "axios";

class NewCar extends Component {
  state = {
    model: "",
    color: "",
    year: "",
    imageURL: ""
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
    // console.log(this.state);
    axios
      .post("/api/new", this.state)
      .then(response => {
        console.log(response);
        if(response.data.error){
          alert("Failed to create" + response.data.message);
        }else{
          this.props.history.push('/collection/' + response.data.data._id);
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
        <h1>This is my new car container</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Model"
              onChange={this.handleChange}
              name="model"
              value={this.state.model}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Color"
              onChange={this.handleChange}
              name="color"
              value={this.state.color}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Year"
              onChange={this.handleChange}
              name="year"
              value={this.state.year}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Image URL"
              onChange={this.handleChange}
              name="imageURL"
              value={this.state.imageURL}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
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

export default NewCar;
