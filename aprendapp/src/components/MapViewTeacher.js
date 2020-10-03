import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/teacher.json';
import Markers from './VenueMarkers';


function fromData(success, errori, data) {
    try {
      var position = {"coords": data.venue[0].geometry}
      success(position);
    } catch (error) {
        console.log(error)
        errori();
    }
}
//
export class MapViewTeacher extends React.Component {
  state = { userLocation: { lat: -34.9062, lng: -56.1861 }, loading: true };

  componentDidMount() {
    fromData(
      position => {
        const latitude = position.coords.lat;
        const longitude = position.coords.lng;
        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    , data);
    
  }

  render() {
    const { loading, userLocation } = this.state;

    if (loading) {
      return null
      // <div class="progress">
      // <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
      // </div>
      ;
    }

    return (
      <Map center={userLocation} zoom={16}>
        <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         />
        <Markers venues={data.venue}/>
      </Map>
      );
  }

}

export default MapViewTeacher;