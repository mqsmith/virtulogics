import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Home from "./containers/Home";
// import Routes from './components/routing/Routes';
import Sidebar from "./components/Sidebar/Sidebar";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts';
import Clusters from './containers/Clusters/Clusters';
import Host from './containers/Host/Host';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

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
   {/*  //<Fragment> */}
      <div>
        <Navbar />
        <Sidebar />
        <div id="page-wrap">
        <Switch>
        {/* <Route component={Routes} />   */}
          <Route path="/collection" component={Collection} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path="/hosts" component={Hosts} />
          <Route path="/clusters" component={Clusters} />
          <Route path="/host/:esxhostname" component={Host} />
          <Route path="/*" component={Home} />
          
          
          
          
          
          
        </Switch>
        </div>
        
      </div>
     {/*  </Fragment> */}
    </Router>
    </Provider>
  );
};


export default App;
