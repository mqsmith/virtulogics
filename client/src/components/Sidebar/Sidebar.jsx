// Import Links
import React, { Component } from "react";
import SidebarNarrow from "../SideBarNarrow/SideBarNarrow";
import SideBarWide from "../SideBarWide/SideBarWide";

// Sidebar Component
class Sidebar extends Component {
  state = {
    navOpen: false
  };

  render() {
    return (
      <>
      {this.state.navOpen ? (<SideBarWide navOpen={this.state.navOpen} navHandler={() => {
                  this.setState({ navOpen: false });
                }}/>) : (<SidebarNarrow navOpen={this.state.navOpen} navHandler={() => {
                  this.setState({ navOpen: true });
                }}/>
        
    )}
    </>
    )
  }
}

// Export Link
export default Sidebar;
