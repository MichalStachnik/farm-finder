import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import FarmPopup from '../FarmPopup/FarmPopup';

import styles from './FarmMapGL.module.css';

import data from '../../public/data.json';

export default function FarmMapGL({ viewport, setViewport }) {
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
        {data.data.length
          ? data.data.map((farm) => {
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
            offsetLeft={20}
            offsetTop={5}
          >
            <FarmPopup selectedFarm={selectedFarm} />
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
