import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

// class MapView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentLocation: { lat: 52.52437, lng: 13.41053 },
//       zoom: 12,
//     }
//   }

//   render() {
//     const { currentLocation, zoom } = this.state;

//     return (
//       <Map center={currentLocation} zoom={zoom}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         />

//         <Markers venues={data.venues}/>
//       </Map>
//     );
//   }
// }






export class MapView extends React.Component {
  state = { userLocation: { lat: -34.9062, lng: -56.1861 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;

    if (loading) {
      return null;
    }

    return (
      <Map center={userLocation} zoom={16}>
        <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         />
        <Markers venues={data.venues}/>
      </Map>
      );
  }


  // render() {
  //   const { currentLocation, zoom } = this.state;

  //   return (
  //     <Map center={currentLocation} zoom={zoom}>
  //       <TileLayer
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
  //       />

  //       <Markers venues={data.venues}/>
  //     </Map>
  //   );
  // }
}

export default MapView;