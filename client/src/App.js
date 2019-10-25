import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Collection from "./containers/Collection";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function App() {
  return (
    <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <Toggle />
                <Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="collection">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Collection
                        </NavText>
                    </NavItem>
                </Nav>
            </SideNav>
            <main>
                {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                <Route path="/collection" component={props => <Collection />} />
                <Route path="/home" component={props => <Home />} />
               
                {/* <Route path="/devices" component={props => <Devices />} /> */}
            </main>
        </React.Fragment>
    )}
    />
</Router>
  );
}

export default App;
