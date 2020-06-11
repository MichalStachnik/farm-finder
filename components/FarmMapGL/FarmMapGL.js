import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import styles from './FarmMapGL.module.css';

import data from '../../public/data.json';

export default function FarmMapGL({ features, viewport, setViewport }) {
  console.log('our farm data', data);
  const [selectedFarm, setSelectedFarm] = useState(null);

  const handleViewportChange = (viewport) => {
    setViewport(viewport);
  };

  return (
    <div className={styles.farmMapContainer}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        onViewportChange={handleViewportChange}
      >
        {features.length
          ? features.map((feature) => {
              return (
                <Marker
                  key={feature.id}
                  longitude={feature.center[0]}
                  latitude={feature.center[1]}
                >
                  <div onClick={(e) => setSelectedFarm(feature)}>
                    <img
                      className={styles.markerContainerImg}
                      src="/seedling-solid.svg"
                      alt="seedling"
                    />
                  </div>
                </Marker>
              );
            })
          : null}
        {selectedFarm ? (
          <Popup
            longitude={selectedFarm.center[0]}
            latitude={selectedFarm.center[1]}
            onClose={() => setSelectedFarm(null)}
          >
            <div>farm:</div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
