import React from "react";
// import { Link } from "react-router-dom";

const CPU_Button = props => {
  return (
       <a href="#" className= "btn btn-warning"> {props.usagemhz_average}Mhz</a>,
       <a href="#" className= "btn btn-warning"> {props.utilization_average}%</a>
  );
};

export default CPU_Button;