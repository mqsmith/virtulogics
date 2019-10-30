import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Routes from './components/routing/Routes';
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./containers/Home";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts';
import PrivateRoute from './components/routing/PrivateRoute'
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

<PrivateRoute exact path='/host/:esxhostname' component={props => (
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Host {...props} />
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

<PrivateRoute exact path='/collection' component={props => (
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Collection {...props} />
                </div>
          )

          }/>

<PrivateRoute exact path='/clusters' component={props => (
                <div className="page-wrap">
                  <Navbar />
                  <Sidebar />
                  <Clusters {...props} />
                </div>
          )

          }/>
    
          <Route component={Routes} />

            <Route path="/" render={props =>
              <div className="nav-style">
                <Navbar />
                <Home />
              </div>
            } />
          </Switch>
      </Router>
    </Provider>
  );
};


export default App;
