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
          {/* <span> */}
          <button className="search">
            <img
              className="img"
              src="/search-location-solid.svg"
              alt="search location"
            />
          </button>
          {/* </span> */}
          <span className="close-container" onClick={() => setIsOpen(false)}>
            <button className="close">X</button>
          </span>
        </>
      ) : (
        <span className="open-container" onClick={() => setIsOpen(true)}>
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
          width: 30vw;
          position: absolute;
          right: 4.5vw;
          top: 70px;
          z-index: 1;
          display: flex;
          justify-content: flex-end;
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

        .open-container {
          width: 48px;
        }

        .open-container button.search {
          border-radius: 5px;
        }

        button.search {
          width: 100%;
          flex: 0.25;
          min-height: 30px;
          display: flex;
          align-items: center;
          background: #373737;
          border: none;
          border-right: 2px solid var(--white);
          padding: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        span.close-container {
          flex: 0.25;
        }

        button.close {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: #373737;
          border: none;
          border-radius: 0 5px 5px 0;
          color: var(--white);
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
