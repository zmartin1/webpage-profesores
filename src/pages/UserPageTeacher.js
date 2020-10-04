import React from "react";
import { Link } from 'react-router-dom'
import MapView from '../components/MapViewTeacher.js';
import data from '../assets/teacher.json'
import "../styles.css";
import userPhoto from '../assets/joaquito.webp'
import {Button, Card, Carousel, Container, Row, Col, Image} from 'react-bootstrap'

const subjectsData = data.subjects;

class UserPageTeacher extends React.Component {
  constructor() {
    super();
    this.state = {
      subjects: subjectsData
    }
    
  }

  // componentDidMount() {
  //   this.setState({
  //     subjects = subjectsData
  //   })
  // }

  render() {
    return (

      <Container fluid>
        <Row xs={1} md={2}>
          <Col lg={true}>
            <Card >
              <Card.Img variant="top" src={userPhoto}/>
              <Card.Body>
                  <Card.Title> 
                    {data.name}
                  </Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                  <Button variant="outline-primary">
                    <Link className="nav-link" to="/map"> Mapa </Link>
                  </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <MapView />     
          </Col>
          <Link to="/"> HomePage </Link>
        </Row>
      </Container>
    );
  }
}


export default UserPageTeacher;
  