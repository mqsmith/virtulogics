import React from "react";
import "./MEM_Card.css";

const MEM_Card = props => (
  <div className="card card-stats">
    <div id="inner" className="card-header">
      {props.title}
    </div>

    <button className="btn btn-success">
      <p>{props.text}</p>
      {props.firstButton} %
    </button>
    <button className="btn btn-success">
      <p>MEM Utilization:</p>
      {props.secondButton} %
    </button>
  </div>
);

export default MEM_Card;
