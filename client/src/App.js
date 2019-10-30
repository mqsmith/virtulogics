import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Routes from './components/routing/Routes';
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./containers/Home";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts';
import PrivateRoute from './components/routing/PrivateRoute'


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
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/collection' component={props => (
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Collection {...props} />
                </div>
          )

          }/>

<PrivateRoute exact path='/hosts' component={props => (
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Hosts {...props} />
                </div>
          )

          }/>


         {/*  <PrivateRoute exact path='/hosts' component={Hosts} /> */}
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);
};

{/* <Route path="/collection" render={props =>
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
            } /> */}


export default App;
