import React, { useState , lazy } from "react";
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import userPhoto from '../assets/joaquito.webp'
import {Button, Card, Carousel, Container, Row, Col, Image} from 'react-bootstrap'


export default function HomePage() {

    const teacher = "joaquito";
    const link = '/teacher/'+ teacher
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

    <div className="App">
        
        <Container fluid>
            <Row xs={1} md={2} lg={3} xl={3}>
                <Col lg={true}>
                    <Carousel activeIndex={index} onSelect={handleSelect} >
                        <Carousel.Item>
                            <Image
                            className="d-block w-100"
                            src= {userPhoto} 
                            alt="First slide"
                            >
                            </Image>
                            <Carousel.Caption>
                                <h3>Elige a un profesor nuevamente</h3>
                                <p>Coordina una clase con tu último profesor.</p>
                                <Link className="nav-link" to= {link} > {teacher} </Link>
                            </Carousel.Caption>
                        </Carousel.Item>                      
                    </Carousel>
                </Col>
                <Col>
                    <Card >
                        <Card.Img display= "inline-block" variant="top" src={logo}/>
                        <Card.Body>
                            <Card.Title> Ver profesores en área</Card.Title>
                            <Card.Text>
                                Elija un profesor acorde a sus necesidades
                            </Card.Text>
                            <Button variant="outline-primary">
                                <Link className="nav-link" to="/map"> Mapa </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Img display= "inline-block" variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title> Sobre la app</Card.Title>
                            <Card.Text>
                                Conozca más
                            </Card.Text>
                            <Button variant="outline-primary">
                                <Link className="nav-link" to="/about"> About </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                
            
            </Row>
            
        </Container>
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            
            <Link to="/:id"> UserPage </Link>
        </header> */}
    </div>

    );

}

