import React from "react";

import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./containers/Home";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts'

import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      
      <div>
        <Switch>
        <Route path="/collection" render={props =>
            <div className="page-wrap">
              <Collection />
              <Sidebar />
              <Nav />
            </div>
          } />
          <Route path="/hosts" render={props =>
            <div className="page-wrap">
              <Hosts />
              <Sidebar />
              <Nav />
            </div>
          } />
         <Route path="/" render={props =>
            <div className="nav-style">
              <Home />
              <Nav />
            </div>
          } />

        </Switch>

      </div>
    </Router>
  );
}


export default App;
