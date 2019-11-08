import React from "react";
import "./SideBarNarrow.css"

const SideBarNarrow = props => {
  return (
    <div className="sideBarNarrow">
      <button
        type="button"
        className="btn btn-dark"
        navOpen={props.navOpen}
        onClick={props.navHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
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
