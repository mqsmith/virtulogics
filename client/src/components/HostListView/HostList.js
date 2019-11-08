import React from "react";
import { Link } from "react-router-dom";

import HostCard from "../HostCardView/HostCard";

const renderTableHeader = () => {
  return (
    <tr key="headers">
      <th>Host Name</th>
      <th>Usage Average</th>
      <th>Memory Usage (GB)</th>
      <th>CPU Usage Average</th>
    </tr>
  );
};

const renderTableData = props => {
  return props.hostData.map((host, i) => {
    return (
      <tr key={host.esxhostname}>
        <td>
          {" "}
          <Link to={`/host/${host.esxhostname}`}>
            <button className="btn-dark btn host-button">
              {host.esxhostname}
            </button>
          </Link>
        </td>
        <td>{host.usage_average.toFixed(2)}</td>
        <td>
          {((host.totalCapacity_average * host.usage_average) / 100000).toFixed(
            2
          )}
        </td>
        <td>{host.cpu_usage_average.toFixed(2)}</td>
      </tr>
    );
  });
};

const HostList = props => {
  return (
    <div>
      {props.view ? (
        <>
          <div className="toggle-switch">
          <p id="toggle-text" >Detailed View &nbsp; &nbsp;
            <label className="switch">
              <input type="checkbox" onChange={props.cardHandler} />
              <span className="slider round"></span>
            </label>
            </p>
          </div>

          <h1 id="title">Host Info</h1>
          <table id="hosts">
            <tbody>
              {renderTableHeader()}
              {renderTableData(props)}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className="toggle-switch">
          <p id="toggle-text">List View &nbsp;&nbsp;
            <label className="switch">
              <input type="checkbox" onChange={props.listHandler} checked />
              <span className="slider round"></span>
            </label>
            </p>
          </div>

          <HostCard hostData={props.hostData} />
        </>
      )}
    </div>
  );
};

export default HostList;

// {props.view ? <div>
//       <h1 id="title">Host Info</h1>
//          <table id="hosts">
//           <tbody>
//              {renderTableHeader()}
//             {renderTableData(props)}
//            </tbody>
//          </table>
//     </div> : <HostCard hostData={props}/>
//      }
