import { useState, useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ReactMapGL from 'react-map-gl';
import { GlobalContext } from '../context/GlobalState';

import { getFeatures } from '../services/api.service';

import { server } from '../utils/config';

const FarmMapGL = dynamic(() => import('../components/FarmMapGL/FarmMapGL'), {
  ssr: false,
});
import Suggestions from '../components/Suggestions/Suggestions';
import Navbar from '../components/Navbar/Navbar';

function Index() {
  const [features, setFeatures] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 41.5,
    longitude: -73.5,
    width: '100%',
    height: '100%',
    zoom: 9,
  });
  const [farms, setFarms] = useState([]);

  const myContext = useContext(GlobalContext);

  const handleSearchChange = async (searchValue) => {
    const { attribution, features } = await getFeatures(searchValue);
    setFeatures(features);
  };

  const handleViewportChange = ({ latitude, longitude }) => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
    });
  };

  const fetchFarms = async () => {
    const res = await fetch('/api/farms');
    console.log('the res', res);
    const data = await res.json();
    console.log('data back', data);
    // Set farms to local state
    setFarms(data.farms[0].farms);

    // Set farms to global state
    myContext.setFarms(data.farms[0].farms);
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  return (
    <div>
      <Head>
        <title>Farm Fresh</title>
        <meta
          name="description"
          content="Find local farms and help reduce food waste and spoilage due to supply chain breakdowns."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar
        changeViewport={handleViewportChange}
        changeSearch={handleSearchChange}
        features={features}
      />
      <main>
        <FarmMapGL
          viewport={viewport}
          setViewport={setViewport}
          farms={farms}
        ></FarmMapGL>
      </main>
    </div>
  );
}

export default Index;
