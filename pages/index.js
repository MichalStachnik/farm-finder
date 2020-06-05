import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const FarmMapGL = dynamic(() => import('../components/FarmMapGL/FarmMapGL'), {
  ssr: false,
});

import Suggestions from '../components/Suggestions/Suggestions';

function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [features, setFeatures] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${process.env.MAPBOX_KEY}`
      );
      const json = await res.json();
      console.log('json: ', json);
      setFeatures(json.features);
    } catch (error) {
      console.log('error sending request');
      console.error(error);
    }
  };

  const logState = () => {
    console.log('log state lets go vercel');
    console.log(features);
    console.log(searchValue);
  };

  useEffect(() => {
    console.log('in use effect');
  }, [features]);

  return (
    <div>
      <h1>Welcome to Farm Finder</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Search</button>
      </form>
      {features.length ? <Suggestions features={features} /> : null}
      {/* <div> */}
      {/* {features.length
          ? features.map((feature) => (
              <Suggestion key={feature.id} feature={feature} />
            ))
          : null} */}
      {/* </div> */}

      <button onClick={logState}>log state</button>
      {/* {features.length ? <FarmMapGL features={features}></FarmMapGL> : null} */}
      <FarmMapGL features={features}></FarmMapGL>
    </div>
  );
}

export default HomePage;
