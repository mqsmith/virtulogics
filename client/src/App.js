import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Home from "./containers/Home";
import Routes from './components/routing/Routes';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Routes from './components/routing/Routes';
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./containers/Home";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute'

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
   {/*  //<Fragment> */}
      <div>
        <Navbar />
        <Sidebar />
        <div id="page-wrap">
        <Switch>
        
          <PrivateRoute path="/collection" component={Collection} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <PrivateRoute path="/hosts" component={Hosts} />
          <Route path="/" component={Home} />
      
          
          
          
          
          
          
          
        </Switch>
      <Router>

        <div>
          <Switch>
            <Route path="/collection" render={props =>
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Collection />
                </div>
            } />
            <Route path="/hosts" render={props =>
                <div className="page-wrap">
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
