import React from 'react';
import {Popup} from 'react-leaflet';
import { Link } from 'react-router-dom'


const MarkerPopup = (props) => {
  const { name } = props.data;

  return  (
  <Popup>
    <div className='poup-text'>{name}</div>
    <Link to="/"> HomePage </Link>
  </Popup>);
};

export default MarkerPopup;
