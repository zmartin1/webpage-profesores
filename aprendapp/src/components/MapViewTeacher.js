import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './VenueMarkers';
import data from '../assets/datasingle.json';


export class MapViewTeacher extends React.Component {
  state = { userLocation: { lat: -34.9062, lng: -56.1861 } };

  constructor(props) {
    super(props);
    this.state = {
      userLocation: data.geometry
    }
  }

  render() {
    const { userLocation } = this.state;

    return (
      <Map center={ userLocation } zoom={16}>
        <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         />
        <Markers venues={[data]}/>
      </Map>
      );
  }

}

export default MapViewTeacher;