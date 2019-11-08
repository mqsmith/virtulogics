// Import Links
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';

const Routes = () => {
  // Route to handle Register and Login Routes
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </section>
  );
};

// Export Link
export default Routes;