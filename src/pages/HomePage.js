import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import userPhoto from '../assets/joaquito.webp'
import {Button, Card, Carousel, Container, Row, Col, Image} from 'react-bootstrap'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  
//   const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

class HomePage extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
        }
        
      }

      
    render (){
    return(
    
    
    <div className="App">
        {this.props.user.username &&
        <Container fluid>
            <Row xs={1} md={2} lg={3} xl={3}>
                <Col lg={true}>
                {this.props.user.last_teacher&&<Carousel >
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
                                <Link className="nav-link" to= {{pathname: '/teacher/'+this.props.user.last_teacher, state:{teacher: this.props.user.last_teacher}}} > {this.props.user.last_teacher} </Link>
                            </Carousel.Caption>
                        </Carousel.Item>                      
                    </Carousel>
                }
                    
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
                                <Link className="nav-link" to="/list"> Lista de profesores </Link>
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
        
    }
    {!this.props.user.username &&<Redirect to={'/sign-in'} />}
    </div>
    


    );
    }
}

export default connect(mapStateToProps)(HomePage);

