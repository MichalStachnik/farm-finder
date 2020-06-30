import { useState, useCallback } from 'react';
import Link from 'next/link';
import Suggestions from '../Suggestions/Suggestions';

import { debounce } from '../../utils/debounce';

import styles from './Navbar.module.css';

export default function Navbar({
  changeViewport = null,
  changeSearch = null,
  features = [],
  inverted = false,
}) {
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

  let navClass = inverted
    ? `${styles.nav} ${styles.inverted}`
    : `${styles.nav}`;

  return (
    <nav className={`${navClass}`}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Farm Fresh</h1>
        </Link>
        <p>help end local food waste</p>
      </div>
      <div className={styles.searchContainer}>
        {changeViewport ? (
          <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="search-input">Search</label>
            <input
              className={styles.input}
              id="search-input"
              type="text"
              placeholder="Search for local farms..."
              value={searchValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <button className={styles.button}>
              <img
                className={styles.img}
                src="/search-location-solid.svg"
                alt="search location"
              />
            </button>
          </form>
        ) : null}
      </div>
      <div className={styles.links}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.suggestionsContainer}>
        {showingSuggestions && searchValue.length && features.length ? (
          <Suggestions
            suggestionClick={handleSuggestionClick}
            features={features}
          />
        ) : null}
      </div>
    </nav>
  );
}
