import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPageTeacher'
import About from './pages/About'
import ForgotPassword from './pages/ForgotPassword'
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import SideBar from "./components/sidebar.js";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
            {/* <h1></h1> */}
        </div>
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      </nav> */}
      
      <Switch>
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route path="/:id" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
