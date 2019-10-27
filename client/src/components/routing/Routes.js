import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';
import Hosts from '../../containers/Hosts/Hosts';
import Home from '../../containers/Home';
import Collection from '../../containers/Collection';


import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        
      
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} /> 
        <PrivateRoute path="/collection" component={Collection} />
        <PrivateRoute path="/hosts" component={Hosts} />
        <PrivateRoute path='/' component={Home} />          

        
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
