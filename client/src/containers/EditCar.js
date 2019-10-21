import React, { Component } from "react";
import axios from "axios";

class EditCar extends Component {
  state = {
    model: "",
    color: "",
    year: "",
    imageURL: "",
    _id: ""
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getCarById();
  }

  getCarById = () => {
    axios
      .get("/api/cars/" + this.props.match.params.id)
      .then(car => {
        console.log(car);
        this.setState({
          model: car.data.data.model,
          color: car.data.data.color,
          year: car.data.data.year,
          imageURL: car.data.data.imageURL,
          _id: car.data.data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = event => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put("/api/car", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="row">
        <h1>This is the edit page</h1>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form>
            <div className="form-group">
              <label htmlFor="model">Tesla Model</label>
              <input
                className="form-control"
                type="text"
                name="model"
                placeholder="Model"
                value={this.state.model}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Tesla Color</label>
              <input
                className="form-control"
                type="text"
                name="color"
                placeholder="Color"
                value={this.state.color}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Tesla Year</label>
              <input
                className="form-control"
                type="number"
                name="year"
                placeholder="Year"
                value={this.state.year}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageURL">Tesla Image URL</label>
              <input
                className="form-control"
                type="text"
                name="imageURL"
                placeholder="Image URL"
                value={this.state.imageURL}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit Changes
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    );
  }
}

export default EditCar;
