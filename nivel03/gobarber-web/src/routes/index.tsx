import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import signIn from '../pages/SignIn';
import signUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/signup" component={signUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
