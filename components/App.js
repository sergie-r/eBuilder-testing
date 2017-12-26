import React from 'react';
import { Switch, Route } from 'react-router-dom'
import RegistrationPage from './RegistrationPage';
import LogInPage from './LogInPage';
import Home from './Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={RegistrationPage} />
    <Route path="/log-in" component={LogInPage} />
  </Switch>
);

export default App;
