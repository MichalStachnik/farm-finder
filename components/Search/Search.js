import { useState, useCallback } from 'react';

import { debounce } from '../../utils/debounce';

export default function Search({ changeSearch }) {
  const [isOpen, setIsOpen] = useState(true);
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
      {isOpen ? (
        <>
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
          <button className="search">
            <img
              className="img"
              src="/search-location-solid.svg"
              alt="search location"
            />
          </button>
          <span onClick={() => setIsOpen(false)}>X</span>
        </>
      ) : (
        <span onClick={() => setIsOpen(true)}>
          <button className="search">
            <img
              className="img"
              src="/search-location-solid.svg"
              alt="search location"
            />
          </button>
        </span>
      )}
      <style jsx>{`
        form {
          position: absolute;
          right: 10%;
          top: 10%;
          z-index: 1;
          display: flex;
        }

        form label {
          width: 0;
          height: 0;
          opacity: 0;
        }

        input {
          flex: 1;
          min-height: 30px;
          border-right: none;
          border-radius: 5px 0 0 5px;
          padding: 0.5rem;
          outline: none;
          font-size: 14px;
          border-color: #222;
        }

        button.search {
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

        button.toggle {
        }

        img {
          width: 18px;
        }
      `}</style>
    </form>
  );
}
