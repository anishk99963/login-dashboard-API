import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token ? <Redirect to="/dashboard" /> : <LoginForm />}
        </Route>
        <Route path="/dashboard">
          {token ? <Dashboard /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
