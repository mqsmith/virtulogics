import React from "react";
<<<<<<< HEAD
=======

import Collection from "./containers/Collection";
import Home from "./containers/Home";
import Single from "./containers/Single";
import NewCar from "./containers/NewCar";
import EditCar from './containers/EditCar';
>>>>>>> ff1132874c1006fc8b74644be789fd22f24b6266
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
