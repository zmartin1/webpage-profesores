import React from "react";
import { Link } from 'react-router-dom'
import { askForPermissioToReceiveNotifications } from '../push-notification';

export default function Settings() {

return (

<>
<h1>Settings</h1>
<button onClick={askForPermissioToReceiveNotifications}>
                Click to receive notifications
            </button>
<Link to="/"> HomePage </Link>
</>

);

}