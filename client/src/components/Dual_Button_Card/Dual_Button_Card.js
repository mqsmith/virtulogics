import React from "react";
import "./Dual_Button_Card.css";

const Dual_Button_Card = props => (
  <div className="card card-stats">
    <div id="inner" className="card-header">
      {props.title}
    </div>

    <button className="btn btn-success">
      <p>{props.text1}</p>
      {props.firstButton}
    </button>
    <button className="btn btn-success">
      <p>{props.text2}</p>
      {props.secondButton}
    </button>
  </div>
);

export default Dual_Button_Card;
