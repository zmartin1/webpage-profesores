import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;


  // const addresses = venues.map((venue, index) => (
  //   Geocode.fromAddress(venue.address).then(
  //   response => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   error => {
  //     console.error(error);
  //   })
  // )
  // )

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon} >
      <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;
