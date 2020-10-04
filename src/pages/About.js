import React from "react";
import { Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'

export default function About() {

return (



  <Container>
    <h1>Welcome</h1>
    <h2>This is a webpage first made for TIC III</h2>

    <p>This is where College students will be able to get an income, and we will able to contribute to education.</p>
    <Link to="/"> HomePage </Link>

    </Container>
);

}