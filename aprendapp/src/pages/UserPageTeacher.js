import React from "react";
import { Link } from 'react-router-dom'
import MapView from '../components/MapViewTeacher.js';
import data from '../assets/teacher.json'
import "../styles.css";
import userPhoto from '../assets/joaquito.png'
import Image from 'react-bootstrap/Image'

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

      <div>
        <h1>{data.name}</h1>
        <Image src={userPhoto} fluid roundedCircle	width="100 vw"
/>

        <ul>
            <li 
            key = {this.state.subjects.materia}
            title = {this.state.subjects.puntuacion} />
        </ul>
        <Link to="/"> HomePage </Link>
  
        <div>
          <MapView />
        </div>
  
  
    </div>
        
    );
  }
}


export default UserPageTeacher;
  