import { useState } from 'react';
import dynamic from 'next/dynamic';
import ReactMapGL from 'react-map-gl';

import { getFeatures } from '../services/api.service';

const FarmMapGL = dynamic(() => import('../components/FarmMapGL/FarmMapGL'), {
  ssr: false,
});
import Suggestions from '../components/Suggestions/Suggestions';
import Navbar from '../components/Navbar/Navbar';

function HomePage() {
  const [features, setFeatures] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 41,
    longitude: -74,
    width: '100%',
    height: '100%',
    zoom: 6,
  });

  const handleSearchChange = async (searchValue) => {
    console.log('in parent with', searchValue);
    const { attribution, features } = await getFeatures(searchValue);
    setFeatures(features);
  };

  const handleViewportChange = ({ latitude, longitude }) => {
    setViewport({
      ...viewport,
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <div>
      <Navbar
        changeViewport={handleViewportChange}
        changeSearch={handleSearchChange}
        features={features}
      />
      <FarmMapGL viewport={viewport} setViewport={setViewport}></FarmMapGL>
    </div>
  );
}

export default HomePage;
