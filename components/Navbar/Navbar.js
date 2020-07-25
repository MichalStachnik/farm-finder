import { useState, useCallback, useContext } from 'react';

import Link from 'next/link';

import { GlobalContext } from '../../context/GlobalState';

import Suggestions from '../Suggestions/Suggestions';

import styles from './Navbar.module.css';

export default function Navbar({
  changeViewport = null,
  changeSearch = null,
  features = [],
  inverted = false,
  userType = null,
}) {
  const [showingSuggestions, setShowingSuggestions] = useState(false);

  const myContext = useContext(GlobalContext);

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

  // if userType is farmer then get their farm
  let userFarmUrl;
  if (myContext.farms && myContext.farms[0] && userType === 'farmer') {
    const usersFarm = myContext.farms[0].find(
      (farm) => farm.realUser === myContext.userEmail
    );
    userFarmUrl = `/farm/${usersFarm.name}/farm`;
  }

  return (
    <nav className={`${navClass}`}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Farm Fresh</h1>
        </Link>
        <p>help end local food waste</p>
      </div>
      <div className={styles.links}>
        <ul className={styles.ul}>
          {userType === 'farmer' ? (
            <li>
              <Link href="/farm/[farmId]/farm" as={userFarmUrl}>
                <a>My Farm</a>
              </Link>
            </li>
          ) : null}
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
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className={styles.suggestionsContainer}>
        {features.length ? (
          <Suggestions
            suggestionClick={handleSuggestionClick}
            features={features}
          />
        ) : null}
      </div> */}
    </nav>
  );
}
