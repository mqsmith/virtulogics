import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';


import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};

export default Routes;
