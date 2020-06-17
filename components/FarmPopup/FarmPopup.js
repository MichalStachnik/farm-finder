import React from 'react';

export default function FarmPopup({ selectedFarm }) {
  return (
    <div className="container">
      <h5>
        <a href={selectedFarm.website} target="_blank">
          {selectedFarm.name}
        </a>
      </h5>
      <div>
        <ul>
          {selectedFarm.products.map((product) => {
            return (
              <li key={product.type}>
                <img src={product.image} alt={product.type} />
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .container {
          background: #fff;
          padding: 1rem;
          border: 1px solid rgba(46, 91, 255, 0.08);
          border-radius: 1px;
        }

        h5 {
          text-align: center;
          margin-bottom: 20px;
        }

        a {
          color: var(--light-green);
        }

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
        }

        img {
          width: 35px;
          height: 35px;
        }
      `}</style>
    </div>
  );
}
