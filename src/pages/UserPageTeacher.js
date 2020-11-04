import React, {Suspense} from "react";
import { Link } from 'react-router-dom'
import data from '../assets/teacher.json'
import "../styles.css";
import userPhoto from '../assets/joaquito.webp'
import {Button, Card, Container, Row, Col } from 'react-bootstrap'
const MapViewTeacher = React.lazy(() => import ('../components/MapViewTeacher.js'));

const subjectsData = data.subjects;

class UserPageTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.teacherUser = data.username
    this.state = {
      subjects: subjectsData,
      teacherPhoto: {},
      isLoaded: false
    }
    
  }

  componentDidMount() {
    var cdn = "https://aprendapp.s3.us-east-2.amazonaws.com/teachers/"+ String(this.teacherUser) + ".webp"
    console.log(cdn)
    fetch(cdn, {mode:'cors'} 
    //   {headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // }} ,
    )
      // .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            
            teacherPhoto: URL.createObjectURL(result)
            
          });
          console.log("Entro bien"+ String(result))
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log("Jajajajajaja sos malo en esto"+ {cdn})
          throw error
        }
      )
  }

  render() {
    return (

      <Container fluid>
        <Row xs={1} md={2} lg={3} xl={3}>
          <Col lg={true}>
            <Card>
              { this.state.isLoaded &&
                <Suspense fallback={<div>Loading...</div>}>
                  <Card.Img display= "inline-block" variant="top" src={this.state.teacherPhoto} alt="Profile Photo"/>
                </Suspense> 
              } 
              {
                !this.state.isLoaded && <h1> No cargo na </h1>

              }
            
              
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
  