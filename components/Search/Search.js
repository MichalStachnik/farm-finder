import { useState, useCallback } from 'react';

import { debounce } from '../../utils/debounce';

export default function Search({ changeSearch }) {
  const [searchValue, setSearchValue] = useState('');

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
    // setShowingSuggestions(true);
  };

  const search = (searchValue) => {
    changeSearch(searchValue);
  };

  const makeDebouncedQuery = useCallback(
    debounce((val) => search(val), 1500),
    []
  );

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search-input">Search</label>
      <input
        className="input"
        id="search-input"
        type="text"
        placeholder="Search for local farms..."
        value={searchValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <button className="button">
        <img
          className="img"
          src="/search-location-solid.svg"
          alt="search location"
        />
      </button>
      <style jsx>{`
        form {
          position: absolute;
          right: 20%;
          top: 30%;
          z-index: 1;
        }
      `}</style>
    </form>
  );
}
