import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Home from "./containers/Home";
import Routes from './components/routing/Routes';
import Sidebar from "./components/Sidebar/Sidebar";
import Collection from "./containers/Collection";
import Hosts from './containers/Hosts/Hosts'

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
        <Navbar />
        <Sidebar />
        <div id="page-wrap">
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/hosts" component={Hosts} />
          <Route path="/" component={Home} />
          <Route component={Routes} />
        </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
};


export default App;
