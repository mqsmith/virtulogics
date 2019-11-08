import React from 'react';
import { Link } from "react-router-dom";

import HostCard from '../HostCardView/HostCard'

const renderTableHeader =() => {
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
          <td> <Link to={`/host/${host.esxhostname}`}>
                <button className="btn-dark btn-sm link-button">
                  {host.esxhostname}
                </button>
              </Link></td>
          <td>{(host.usage_average).toFixed(2)}</td>
          <td>
            {(
              (host.totalCapacity_average * host.usage_average) /
              100000
            ).toFixed(2)}
          </td>
          <td>{(host.cpu_usage_average).toFixed(2)}</td>
        </tr>
      );
    });
  };

const HostList = props => {
    return (
        <div>
        {props.view ? <>
            <button
                type="button"
                className="btn btn-dark"
                onClick={props.cardHandler}
              >
                View Detailed Host View
              </button>
            <h1 id="title">Host Info</h1>
              <table id="hosts">
                <tbody>
                  {renderTableHeader()}
                  {renderTableData(props)}
                </tbody>
              </table>
              </> :<>
              <button
                type="button"
                className="btn btn-dark"
                onClick={props.listHandler}
              >
                View Host List
              </button>
              <HostCard hostData={props.hostData}/></>}
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