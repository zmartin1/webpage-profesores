import React from "react";
import { Link } from 'react-router-dom'
import {Button, Card, Container, Row, Col, Image, ListGroup } from 'react-bootstrap'

export default class List extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      profesores: []
    }
    
  }


  componentDidMount() {
    console.log("Hola ")
    fetch("https://noviembre.herokuapp.com/profesores", {
                    "headers": {
                    "content-type": "application/json",
                    },
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "method": "GET",
                    "mode": "cors",
                })
                .then(response => response.json())
                .then(response => this.setState({profesores: response}))
              }

render() {
  return (
    <div>{this.state.profesores &&
    <Container>
      {this.state.profesores.map((teacher, index) => (
        <Card key={index} >
          <Card.Title> 
            {teacher.nombre}
          </Card.Title>
          <Card.Body>
          {teacher.materias.map((subject, indx) => (
              <ListGroup.Item>
                {subject.nombre}
              </ListGroup.Item>
            )
          )}
          </Card.Body>
          <Link className="nav-link" 
          to= {{pathname: '/teacher/'+ teacher.username, state:{teacher: teacher.username}}} > Perfil de {teacher.nombre}</Link>


        </Card>
      ))
          
          }
    </Container>
  
        }

    {!this.state.profesores && <div>Loading...</div>}
    </div>
    
    )
}

}
