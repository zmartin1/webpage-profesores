import React from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function ForgotPassword() {

    let { id } = useParams();

    return (

    <>

    <h1>Hello there user {id}</h1>

    <p>Stub
    </p>
    <Link to="/"> HomePage </Link>
    </>

    );

}