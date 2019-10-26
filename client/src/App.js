import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Collection from "./containers/Collection";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Sidebar />
        <div id="page-wrap">
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/" component={Home} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
