import React from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={UserPage} />
    </Switch>
  );
}

export default App;
