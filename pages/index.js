import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ReactMapGL from 'react-map-gl';

import useSWR from 'swr';

import { getFeatures } from '../services/api.service';

const FarmMapGL = dynamic(() => import('../components/FarmMapGL/FarmMapGL'), {
  ssr: false,
});
import Suggestions from '../components/Suggestions/Suggestions';
import Navbar from '../components/Navbar/Navbar';

const fetcher = (query) =>
  fetch('/api/farms', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => {
      console.log('in then', res);
      return res.json();
    })
    .then((json) => json.data);

function HomePage() {
  const [features, setFeatures] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 41,
    longitude: -74,
    width: '100%',
    height: '100%',
    zoom: 6,
  });
  const [farms, setFarms] = useState([]);

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

  // const { data, error } = useSWR(
  //   '{ farms { name, latitude, longitude, products } }',
  //   fetcher
  // );

  const fetchFarms = async () => {
    const res = await fetch('/api/farms-rest');
    console.log('the res', res);
    const data = await res.json();
    console.log('the data', data);
    setFarms(data.farms[0].farms);
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  return (
    <div>
      <Head>
        <title>Farm Finder</title>
        <meta
          name="description"
          content="Find local farms and help reduce food waste and spoilage due to supply chain break downs."
        />
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

export default HomePage;
