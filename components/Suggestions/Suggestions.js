import React from 'react';

import styles from './Suggestions.module.css';

export default function Suggestion({ features }) {
  console.log('props in suggestion', features);

  const handleSuggestionClick = (featureId) => {
    console.log('suggestion clicked with', featureId);
  };

  return (
    <ul className={styles.suggestionContainer}>
      {features.map((feature) => (
        <li
          className={styles.suggestion}
          key={feature.id}
          onClick={() => handleSuggestionClick(feature.id)}
        >
          {feature.place_name}
        </li>
      ))}
    </ul>
  );
}
