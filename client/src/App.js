import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Nav from "./components/Nav/Nav";
import Collection from "./containers/Collection";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/" component={Home} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
