import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import MapView from '../components/MapViewTeacher.js';
import "../styles.css";

export default function UserPage() {

let { id } = useParams();

return (

  <div>

    <h1>{id}</h1>

    <Link to="/"> HomePage </Link>

      <div>
        <MapView />
      </div>


  </div>

);

}