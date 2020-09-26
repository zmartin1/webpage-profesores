import React from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function ForgotPassword() {

    let { id } = useParams();

    return (

    <>

    <h1>Hello there user {id}</h1>

    <p>U forgot your password hahahaha.
        U really are useless, arent u?
        {"\n"}
        **** you
    </p>
    <Link to="/"> HomePage </Link>
    </>

    );

}