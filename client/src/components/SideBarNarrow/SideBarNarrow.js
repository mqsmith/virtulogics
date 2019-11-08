import React from "react";
import "./SideBarNarrow.css"

const SideBarNarrow = props => {
  return (
    <div className="sideBarNarrow  animated fadeInDown">
      <button
        type="button"
        className="btn btn-dark"
        naveopen={props.naveopen}
        onClick={props.navHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default SideBarNarrow;
