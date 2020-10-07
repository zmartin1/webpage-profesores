import React, {Suspense} from "react";
import { Link } from 'react-router-dom'
import data from '../assets/teacher.json'
import "../styles.css";
import userPhoto from '../assets/joaquito.webp'
import {Button, Card, Container, Row, Col, Image} from 'react-bootstrap'
const MapViewTeacher = React.lazy(() => import ('../components/MapView.js'));

const subjectsData = data.subjects;

class UserPageTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.teacherUser = data.username
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
        <Row xs={1} md={2} lg={3} xl={3}>
          <Col lg={true}>
            <Card >
              <Card.Img display= "inline-block" variant="top" src={userPhoto}/>
              <Card.Body>
                  <Card.Title> 
                    {data.name}
                  </Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                  <Button variant="outline-primary">
                    <Link className="nav-link"
                    to= {{pathname :'/teacher/'+ this.teacherUser + '/booking', teacherData: {data}}}
                      > Agendar clase </Link>
                  </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Container display= "inline-block" fluid>
              <Suspense fallback={<div>Loading...</div>}>
                <MapViewTeacher display= "inline-block"/> 
              </Suspense>
                  
            </Container>
          </Col>
          <Link to="/"> HomePage </Link>
        </Row>
      </Container>
    );
  }
}


export default UserPageTeacher;
  