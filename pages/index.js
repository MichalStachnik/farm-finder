import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import ReactMapGL from 'react-map-gl';

import { getFeatures } from '../services/api.service';

const FarmMapGL = dynamic(() => import('../components/FarmMapGL/FarmMapGL'), {
  ssr: false,
});
import Suggestions from '../components/Suggestions/Suggestions';

const debounce = (fn, time) => {
  let timeoutID;
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(args);
    }, time);
  };
};

function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [features, setFeatures] = useState([]);
  const [showingSuggestions, setShowingSuggestions] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 41,
    longitude: -74,
    width: '100%',
    height: '100%',
    zoom: 6,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchValue.length === 0) return;
    const { attribution, features } = await getFeatures(searchValue);
    setFeatures(features);
  };

  const doSomething = async ([sv]) => {
    console.log('doing something called...');
    console.log(sv);

    const { attribution, features } = await getFeatures(sv);
    setFeatures(features);
  };

  const makeDebouncedQuery = useCallback(
    debounce((val) => doSomething(val), 1500),
    []
  );

  const handleInputChange = async (e) => {
    setSearchValue(e.target.value);
    makeDebouncedQuery(e.target.value);
  };

  const handleInputFocus = () => {
    setShowingSuggestions(true);
  };

  const handleSuggestionClick = (featureId) => {
    const [selected] = features.filter((feature) => feature.id === featureId);

    setViewport({
      ...viewport,
      latitude: selected.center[1],
      longitude: selected.center[0],
    });
    setShowingSuggestions(false);
  };

  return (
    <div>
      <div className="top-container">
        <div className="search-container">
          <h1>Welcome to Farm Finder</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Search..."
            />
            <button>
              <img src="/search-location-solid.svg" alt="search location" />
            </button>
          </form>
        </div>
        {showingSuggestions && searchValue.length && features.length ? (
          <Suggestions
            suggestionClick={handleSuggestionClick}
            features={features}
          />
        ) : null}
      </div>
      <FarmMapGL
        viewport={viewport}
        setViewport={setViewport}
        features={features}
      ></FarmMapGL>
    </div>
  );
}

export default HomePage;
