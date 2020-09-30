import React from "react";
import { Link } from 'react-router-dom'
//import { useParams } from "react-router-dom";
import MapView from '../components/MapView.js';
import "../styles.css";

export default function UserPage() {

//let { id } = useParams();

return (

  <div>

    <h1>Profesores</h1>

    <Link to="/"> HomePage </Link>

      <div>
        <MapView />
      </div>


  </div>

);

}