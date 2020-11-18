import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeFirebase } from './push-notification';
import { askForPermissioToReceiveNotifications } from './push-notification';
import "./styles.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  user: "Sign-In"
};

const store = createStore(reducer);





function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'SIGN_IN':
      return {
        user: action.user
      };
    case 'SIGN_OUT':
      return {
        user: "Sign-In"
      };
    default:
      return state;
  }
}

ReactDOM.render(
  <div>
    <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    </Provider>
  </div>,
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