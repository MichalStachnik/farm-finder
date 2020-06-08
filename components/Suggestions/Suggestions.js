import React, { useState } from 'react';

export default function Suggestion({ features, suggestionClick }) {
  console.log('props in suggestion', features);
  console.log('suggestionClick in child', suggestionClick);

  const [selected, setSelected] = useState(null);

  const handleSuggestionClick = (featureId) => {
    setSelected(featureId);
    console.log('calling it with', featureId);
    suggestionClick(featureId);
  };

  return (
    <div>
      <ul>
        {features.map((feature) => (
          <li
            key={feature.id}
            onClick={() => handleSuggestionClick(feature.id)}
            className={feature.id === selected ? 'selected' : null}
          >
            {feature.place_name}
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-around;
        }

        li {
          display: flex;
          align-items: center;
          border: 1px solid #e0e7ff;
          border-radius: 5px;
          flex: 0.15;
          padding: 0.5rem;
          cursor: pointer;
          box-shadow: 0 10px 20px 0 #f2f2f2;
          text-align: center;

          transition: 0.2s all ease-in-out;
        }

        li:hover {
          border-color: #2e5bff;
        }

        .selected {
          border-color: #2e5bff;
        }
      `}</style>
    </div>
  );
}
