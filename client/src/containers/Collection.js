import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Collection extends Component {
  state = {
    cars: []
  };

  componentDidMount() {
    this.getCars();
  }

  getCars = () => {
    axios
      .get("/api/cars")
      .then(cars => {
        console.log(cars);
        this.setState({ cars: cars.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>Collection of Teslas</h1>
        {this.state.cars.map((car, i) => (
          <div key={car._id}>
            <p>Model: {car.model}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
            <p>ID: {car._id}</p>
            <Link to={"/collection/" + car._id}>Link</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Collection;
