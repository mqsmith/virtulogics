import React from "react";
// import { Link } from "react-router-dom";

const MEM_Button = props => {
  return (
       <a href="#" className= "btn btn-success">MEM Usage Average: {props.usage_average}</a>
    //    <a href="#" className= "btn btn-success">MEM Total Capacity: {props.totalCapacity_average}</a>
  );
};

export default MEM_Button;
