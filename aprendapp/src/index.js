import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeFirebase } from './push-notification';
import { askForPermissioToReceiveNotifications } from './push-notification';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

initializeFirebase();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

const NotificationButton = () => (
  <button onClick={askForPermissioToReceiveNotifications} >
    Click to receive notifications
  </button>
);

export default NotificationButton;