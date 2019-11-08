import React from "react";
import "./SideBarWide.css";

const SideBarWide = props => {
  return (
    <div>
      <nav className="col-md-2 d-none d-md-block sidebar animated fadeInLeft slower">
        <div className="sidebar-sticky">
          <br></br>
          <ul className="nav flex-column">
          <div className="text-right animated fadeInRight delay-1s">
              <div
       
                className="toggle-x"
                onClick={props.navHandler}
              >
             <i className="fa fa-window-close" aria-hidden="true"></i>
              </div>
            </div>

            <li className="nav-item animated fadeInRight delay-1s">
              <a className="nav-link active" href="/clusters">
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
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Cluster Overview <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item animated fadeInRight delay-1s">
              <a className="nav-link active" href="/hosts">
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
                  className="feather feather-layers"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Hosts View
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBarWide;
