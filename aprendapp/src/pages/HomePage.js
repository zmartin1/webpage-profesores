import React from "react";
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import { askForPermissioToReceiveNotifications } from '../push-notification';
import { BrowserRouter } from 'react-router-dom'

export default function HomePage() {

    return (

    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={askForPermissioToReceiveNotifications}>
                Click to receive notifications
            </button>
            <Link to="/:id"> UserPage </Link>
        </header>
    </div>

    );

}

