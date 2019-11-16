// Import React Links
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Navbar from "./components/Nav/Navbar";
import Routes from "./components/routing/Routes";
import Sidebar from "./components/Sidebar/Sidebar";
import PrivateRoute from "./components/routing/PrivateRoute";

// Import Containers
import Home from "./containers/Home/Home";
import Hosts from "./containers/Hosts/Hosts";
import Clusters from "./containers/Clusters/Clusters";
import Host from "./containers/Host/Host";
import NewConfig from "./containers/NewConfig/NewConfig"

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// Import Style Sheet
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <div className="nav-style">
                <Navbar />
                <Home {...props} />
              </div>
            )}
          />

          <PrivateRoute
            exact
            path="/config"
            component={props => (
              <div className="page-wrap">
                <Navbar />
                <Sidebar />
                <NewConfig />
              </div>
            )}
          />
          <PrivateRoute
            exact
            path="/host/:esxhostname"
            component={props => (
              <div className="page-wrap">
                <Navbar />
                <Sidebar />
                <Host {...props} />
              </div>
            )}
          />

          <PrivateRoute
            exact
            path="/hosts"
            component={props => (
              <div className="page-wrap">
                <Navbar />
                <Sidebar />
                <Hosts {...props} />
              </div>
            )}
          />

          <PrivateRoute
            exact
            path="/clusters"
            component={props => (
              <div className="page-wrap">
                <Navbar />
                <Sidebar />
                <Clusters {...props} />
              </div>
            )}
          />

          <Route
            component={props => (
              <div>
                <Navbar />
                <Routes {...props} />
              </div>
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

// Export Link
export default App;
