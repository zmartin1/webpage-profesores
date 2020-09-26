import React from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function UserPage() {

let { id } = useParams();

return (

<>

<h1>Hello there user {id}</h1>

<p>This is your awesome User Profile page</p>
<Link to="/"> HomePage </Link>
</>

);

}