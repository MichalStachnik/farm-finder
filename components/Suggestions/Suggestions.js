import React, { useState } from 'react';

export default function Suggestion({ features, suggestionClick }) {
  const [selected, setSelected] = useState(null);

  const handleSuggestionClick = (featureId) => {
    setSelected(featureId);
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
        div {
          width: 30%;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        li {
          font-size: 0.9rem;
          min-height: 60px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid #e0e7ff;
          border-radius: 5px;
          padding: 0.5rem;
          cursor: pointer;
          box-shadow: 0 10px 20px 0 #f2f2f2;
          text-align: center;
          pointer-events: auto;

          transition: 0.2s all ease-in-out;
        }
        li:hover {
          border-color: var(--pale-green);
        }

        .selected {
          border-color: var(--pale-green);
        }
      `}</style>
    </div>
  );
}
