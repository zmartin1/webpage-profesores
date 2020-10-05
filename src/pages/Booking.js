import React from "react";
import { Link } from 'react-router-dom'
import MyCalendar from "../components/MyCalendar"
import 'react-big-calendar/lib/css/react-big-calendar.css';


import {Container, Row, Col, Image, Jumbotron} from 'react-bootstrap'

export default function Booking() {

return (

<>
    <header>
        <h1>Elija día para la próxima clase</h1>
    </header>
    <Jumbotron fluid>
        <Container fluid>
            
            <Row xs={1} md={2} lg={3} xl={3}>
                
                <MyCalendar fluid >
                </MyCalendar>
            </Row>
        </Container>
    </Jumbotron>
<Link to="/"> HomePage </Link>
</>

);

}