import React from "react";
import { Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'

export default function List() {

return (



  <Container>
    <h1>Welcome</h1>
    <h2>This is a webpage first made for TIC III</h2>

    <p>This is where College students will be able to get an income, and we will able to contribute to education.</p>
    <Link to="/"> HomePage </Link>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </Container>
);

}