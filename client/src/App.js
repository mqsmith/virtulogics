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
        <Nav />
        <Sidebar />
        <div id="page-wrap">
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/hosts" component={Hosts} />
          <Route path="/" component={Home} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
