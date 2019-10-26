import React from "react";
import "./MEM_Card.css";

const MEM_Card = props => (
  <div className="card card-stats">
  <div className="card-header">
  Host Memory Stats:
  </div>
    <button className="btn btn-success">
      <p>MEM Capacity:</p>
      {props.totalCapacity_average}
    </button>
    <button className="btn btn-success">
      <p>MEM Usage:</p>
      {props.usage_average}%
    </button>
  </div>

);

export default MEM_Card;
