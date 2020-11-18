import React, {Suspense} from "react";
import { Link } from 'react-router-dom'
import data from '../assets/teacher.json'
import "../styles.css";
import {Button, Card, Container, Row, Col, Image } from 'react-bootstrap'
const MapViewTeacher = React.lazy(() => import ('../components/MapViewTeacher.js'));

const subjectsData = data.subjects;
var cdn = ""

class UserPageTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: subjectsData,
      teacherPhoto: {},
      isLoaded: false,
      teacher: this.props.location.state.teacher
    }
    
  }

  formatImageUrl(url) {
    const width = '400'
    const height = '400'

    return url.replace('{width}', width).replace('{height}', height)
 }
  componentDidMount() {
    console.log("Hola "+this.state.teacher)
    fetch("https://noviembre.herokuapp.com/profesores/"+String(this.state.teacher), {
                    "headers": {
                    "content-type": "application/json",
                    },
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "method": "GET",
                    "mode": "cors",
                })
                // .then(
                //     function(response) {
                //         if(!response.ok){
                //             throw Error(response.statusText)
                            
                //         }
                //         return response;
                // }
                //     )
                .then(response => response.json())
                .then(response => this.setState({...this.state, subjects: response.subjects}))

    cdn = "https://aprendapp.s3.us-east-2.amazonaws.com/teachers/"+ String(this.state.teacher) + ".webp"
    console.log(cdn)
    fetch(cdn, {mode:'cors'} 
    )
      .then(
        (result) => {
          this.setState({
            ...this.state,
            isLoaded: true,
            teacherPhoto: (result.blob())
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
          console.log("Error"+ {cdn})
          throw error
        }
      )
  }

  render() {
    return (

      <Container fluid>
        <Row xs={1} md={2} lg={3} xl={3}>
          <Col lg={true}>
              {
                !this.state.isLoaded && <h1> Cargando </h1>
              }
            { this.state.isLoaded &&
            <Card>
                <Suspense fallback={<div>Loading...</div>}>
                  
                  <Card.Img src = {cdn}
                  // {
                  //                   `data:image/webp,${this.state.teacherPhoto}`}
                                     alt="Profile Photo" />
                </Suspense> 
              
              {
                !this.state.isLoaded && <h1> Cargando </h1>

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
            }
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


export default (UserPageTeacher);
  