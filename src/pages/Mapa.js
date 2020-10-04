import React , { Suspense } from "react";
import { Link } from 'react-router-dom'
//import { useParams } from "react-router-dom";
import "../styles.css";
const MapView = React.lazy(() => import ('../components/MapView.js'));

export default function UserPage() {

//let { id } = useParams();

return (

  <div>

    <h1>Profesores</h1>

    <Link to="/"> HomePage </Link>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <MapView />
        </Suspense>
      </div>


  </div>

);

}