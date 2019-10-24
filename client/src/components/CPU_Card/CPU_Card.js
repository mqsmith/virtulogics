import React from "react";

const CPU_Card = props => (
  <div className="card img-container hover">
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
