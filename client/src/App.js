import React from "react";
import Collection from "./containers/Collection";
import Home from "./containers/Home";
import Cluster from './containers/Cluster'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/cluster" component={Cluster} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
