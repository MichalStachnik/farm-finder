import { useState } from 'react';
import dynamic from 'next/dynamic';

const FarmMap = dynamic(() => import('../components/FarmMap'), { ssr: false });

function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [features, setFeatures] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${process.env.KEY}`
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
    console.log('log state');
    console.log(features);
    console.log(searchValue);
  };

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
      <button onClick={logState}>log state</button>
      {features.length ? <FarmMap features={features}></FarmMap> : null}
    </div>
  );
}

export default HomePage;
