import React from "react";
import "./MEM_Card.css";

const MEM_Card = props => (
  <div className="card card-stats">
    <div id="inner" className="card-header">
      Host Memory Stats:
    </div>

    <button className="btn btn-success">
      <p>MEM Usage:</p>
      {props.totalCapacity_average} GB
    </button>
    <button className="btn btn-success">
      <p>MEM Utilization:</p>
      {props.usage_average} %
    </button>
  </div>
);

export default MEM_Card;
