import { useState, useCallback } from 'react';
import Suggestions from '../Suggestions/Suggestions';

import { debounce } from '../../utils/debounce';

export default function Navbar({ changeViewport, changeSearch, features }) {
  const [searchValue, setSearchValue] = useState('');
  const [showingSuggestions, setShowingSuggestions] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchValue.length === 0) return;
    changeSearch(searchValue);
  };

  const handleInputChange = async (e) => {
    setSearchValue(e.target.value);
    makeDebouncedQuery(e.target.value);
  };

  const handleInputFocus = () => {
    setShowingSuggestions(true);
  };

  const search = (searchValue) => {
    console.log('searching in child', searchValue);
    changeSearch(searchValue);
  };

  const makeDebouncedQuery = useCallback(
    debounce((val) => search(val), 1500),
    []
  );

  const handleSuggestionClick = (featureId) => {
    const [selected] = features.filter((feature) => feature.id === featureId);

    // Pass new viewport up
    changeViewport({
      latitude: selected.center[1],
      longitude: selected.center[0],
    });

    setShowingSuggestions(false);
  };

  return (
    <nav>
      <div className="logo">
        <h1>Farm Finder</h1>
      </div>
      <div className="search-container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search for local farms..."
            value={searchValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <button>
            <img src="/search-location-solid.svg" alt="search location" />
          </button>
        </form>
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      {showingSuggestions && searchValue.length && features.length ? (
        <Suggestions
          suggestionClick={handleSuggestionClick}
          features={features}
        />
      ) : null}
      <style jsx>{`
        nav {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: 60px;
          place-items: center;
          background: var(--light-green);

          color: #222;
        }

        .search-container {
          width: 60%;
        }

        form {
          display: flex;
        }

        input {
          flex: 1;
          min-height: 30px;
          border-right: none;
          border-radius: 5px 0 0 5px;
          padding: 0.5rem;
          outline: none;
          font-size: 14px;
        }

        button {
          flex: 0.25;
          min-height: 30px;
          display: flex;
          align-items: center;
          background: #373737;
          border: none;
          border-radius: 0 5px 5px 0;
          padding: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        img {
          width: 18px;
        }

        .links {
          width: 100%;
        }

        ul {
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
    </nav>
  );
}
