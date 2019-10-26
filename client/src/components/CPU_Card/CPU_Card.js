import React from "react";
import "./CPU_Card.css";

const CPU_Card = props => (
  <div className="card card-stats">
  <div className="card-header">
  Host CPU Stats:
  </div>
    <button className="btn btn-success">
      <p>CPU Usage:</p>
      {props.usagemhz_average}Mhz
    </button>
    <button className="btn btn-success">
      <p>CPU Utilization:</p>
      {props.utilization_average}%
    </button>
  </div>
);

export default CPU_Card;
