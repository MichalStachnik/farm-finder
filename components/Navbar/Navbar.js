import { useState, useCallback } from 'react';
import Link from 'next/link';

import Suggestions from '../Suggestions/Suggestions';
import Search from '../Search/Search';

import { debounce } from '../../utils/debounce';

import styles from './Navbar.module.css';

export default function Navbar({
  changeViewport = null,
  changeSearch = null,
  features = [],
  inverted = false,
}) {
  const [showingSuggestions, setShowingSuggestions] = useState(false);

  const handleInputFocus = () => {
    setShowingSuggestions(true);
  };

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
      {/* <div className={styles.searchContainer}>
        {changeViewport ? <Search changeSearch={changeSearch} /> : null}
      </div> */}
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
          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.suggestionsContainer}>
        {features.length ? (
          <Suggestions
            suggestionClick={handleSuggestionClick}
            features={features}
          />
        ) : null}
      </div>
    </nav>
  );
}
