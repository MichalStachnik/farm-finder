import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import FarmPopup from '../FarmPopup/FarmPopup';

import styles from './FarmMapGL.module.css';

export default function FarmMapGL({ viewport, setViewport, farms }) {
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
        {farms.length
          ? farms.map((farm) => {
              return (
                <Marker
                  key={farm.name}
                  longitude={Number(farm.longitude)}
                  latitude={Number(farm.latitude)}
                >
                  <div onClick={(e) => setSelectedFarm(farm)}>
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
            longitude={Number(selectedFarm.longitude)}
            latitude={Number(selectedFarm.latitude)}
            onClose={() => setSelectedFarm(null)}
            closeOnClick={false}
            anchor="left"
            offsetLeft={40}
            offsetTop={5}
            tipSize={0}
          >
            <FarmPopup selectedFarm={selectedFarm} />
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
