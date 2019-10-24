import React from "react";

const MEM_Card = props => (
    <div className="card img-container hover">
    <button className="btn btn-success" >
    <p>MEM Capacity:</p>
    {props.totalCapacity_average}
    </button>
    <button className="btn btn-success" >
    <p>MEM Usage:</p>
    {props.usage_average}%
    </button>
    </div>
  );
  
  export default MEM_Card;;