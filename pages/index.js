import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import ReactMapGL from 'react-map-gl';

const FarmMapGL = dynamic(() => import('../components/FarmMapGL/FarmMapGL'), {
  ssr: false,
});

import Suggestions from '../components/Suggestions/Suggestions';

function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

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

  const handleSuggestionClick = (featureId) => {
    console.log('handleSuggestionClick in the parent with ', featureId);
    setSelectedFeature(featureId);
  };

  return (
    <div>
      <div className="search-container">
        <h1>Welcome to Farm Finder</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
          <button>Search</button>
        </form>
        {features.length ? (
          <Suggestions
            suggestionClick={handleSuggestionClick}
            features={features}
          />
        ) : null}
      </div>
      <FarmMapGL
        features={features}
        selectedFeature={selectedFeature}
      ></FarmMapGL>
    </div>
  );
}

export default HomePage;
