import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Routes from './components/routing/Routes';
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./containers/Home";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts';
import Clusters from './containers/Clusters/Clusters';
import Host from './containers/Host/Host';
// import Login from './components/auth/Login';
import Wrapper from "./components/Wrapper/Wrapper";


// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

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

        <div>
          <Switch>
          <Route path="/clusters" render={props =>
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Clusters />
                </div>
            } />
          <Route path="/host/:esxhostname" render={props =>
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Host {...props}/>
                </div>
            } />
            <Route path="/collection" render={props =>
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Collection />
                </div>
            } />
            <Route path="/hosts" render={props =>
                <div className="page-wrap">
                <Wrapper />
                  <Navbar />
                  <Sidebar />
                  <Hosts />
                </div>
            } />
            <Route path="/register" render={props =>
              <div className="nav-style">
                <Navbar />
                <Register />
              </div>
            } />
            <Route path="/login" render={props =>
              <div className="nav-style">
                <Navbar />
                <Login />
              </div>
            } />
            <Route path="/" render={props =>
              <div className="nav-style">
                <Navbar />
                <Home />
              </div>
            } />
          </Switch>
        </div>

      </Router>
    </Provider>
  );
};


export default App;
