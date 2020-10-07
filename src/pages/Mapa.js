import React , { Suspense } from "react";
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
//import { useParams } from "react-router-dom";
import "../styles.css";
const MapView = React.lazy(() => import ('../components/MapView.js'));

export default function UserPage() {

//let { id } = useParams();

return (

  <div>

    <h1>Profesores</h1>

    <Link to="/"> HomePage </Link>

      <Container fluid display= "inline-block">
        <Suspense fallback={<div>Loading...</div>}>
          <MapView fluid/>
        </Suspense>
      </Container>


  </div>

);

}