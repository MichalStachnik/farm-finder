import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

function FarmMap(props) {
  console.log('im a farm map component', props);

  const [mapValues, setMapValues] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 1,
  });

  const position = { lat: mapValues.lat, lng: mapValues.lng };

  return (
    <Map center={position} zoom={mapValues.zoom} className="mt-3">
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}

export default FarmMap;
