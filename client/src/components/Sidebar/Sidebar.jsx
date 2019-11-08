// Import Links
import React, { Component } from "react";
import SideBarNarrow from "../SideBarNarrow/SideBarNarrow";
import SideBarWide from "../SideBarWide/SideBarWide";

// Sidebar Component
const Sidebar = (props) => {
  // state = {
  //   navOpen: false
  // };

  
    return (
      <>
        {props.navOpen ? (
          <SideBarWide navOpen={props.navOpen} navHandler={props.navHandler} />
        ) : (
          <SideBarNarrow
            navOpen={props.navOpen}
            navHandler={props.navHandler}
          />
        )}
      </>
    );
  
}

// Export Link
export default Sidebar;
