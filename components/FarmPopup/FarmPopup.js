import React from 'react';
import Link from 'next/link';

export default function FarmPopup({ selectedFarm }) {
  return (
    <div className="container">
      <h5>
        <Link href="/farm/[farmId]" as={`/farm/${selectedFarm.id}`}>
          {selectedFarm.name}
        </Link>
      </h5>
      <a href={selectedFarm.website} target="_blank">
        {selectedFarm.website}
      </a>
      <div>
        <ul>
          {selectedFarm.products.map((product) => {
            return (
              <li key={product}>
                <img title={product} src={`${product}.svg`} alt={product} />
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
          font-size: 12px;
        }

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
          margin-top: 20px;
        }

        img {
          width: 35px;
          height: 35px;
        }
      `}</style>
    </div>
  );
}
