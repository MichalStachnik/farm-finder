import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function FarmMapGL({ features }) {
  console.log('the features', features);

  const [viewport, setViewport] = useState({
    latitude: 41,
    longitude: -73,
    width: '90vw',
    height: '90vh',
    zoom: 10,
  });

  return (
    <div>
      {features.length
        ? features.map((feature) => {
            return <div key={feature.id}>{feature.center}</div>;
          })
        : null}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.KEY}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {features.length
          ? features.map((feature) => {
              return (
                <Marker
                  key={feature.id}
                  longitude={feature.center[0]}
                  latitude={feature.center[1]}
                >
                  <div> im a marker</div>
                </Marker>
              );
            })
          : null}
      </ReactMapGL>
    </div>
  );
}
