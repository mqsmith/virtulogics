import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Single extends Component {
  state = {
    model: "",
    color: "",
    year: "",
    _id: ""
  };

  componentDidMount() {
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
            _id: car.data.data._id
         });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>This is a single tesla</h1>
        <p>Model: {this.state.model}</p>
        <p>Color: {this.state.color}</p>
        <p>Year: {this.state.year}</p>
        <p>ID: {this.state._id}</p>
        <div className="row">
            <div className="col">
                <Link to="/collection"><button>Go back to collection</button></Link>
            </div>
            <div className="col">
                <Link to={"/edit/" + this.state._id}><button>Edit</button></Link> 
            </div>
            <div className="col">
                <Link to="/"><button>Go Home</button></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Single;
