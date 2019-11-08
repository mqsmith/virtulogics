// Import Links
import React, { Component } from "react";
import "./Sidebar.css";

// Sidebar Component
class Sidebar extends Component {
  state={
    display: true
  }


  render() {
  

    return (
      <>
        <nav className={this.state.display ? "col-md-2 d-none d-md-block sidebar"  : "col-md-2 d-none d-md-block sidebar sidebar-hidden"} >
          <div className="sidebar-sticky">
          <button onClick={() => {this.setState({display: false})}}>Close</button>
          <br></br>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/clusters">
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
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Cluster Overview <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/hosts">
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
      </>
    );
  }
}

// Export Link
export default Sidebar;