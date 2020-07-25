import React from 'react';
import Link from 'next/link';

export default function FarmPopup({ selectedFarm }) {
  return (
    <div className="container">
      <h5>
        <Link href="/farm/[farmId]" as={`/farm/${selectedFarm.id}`}>
          <a>{selectedFarm.name}</a>
        </Link>
      </h5>
      <a href={selectedFarm.website} target="_blank">
        {selectedFarm.website}
      </a>
      <div className="products-container">
        <p>Offerings:</p>
        <ul>
          {selectedFarm.products.map((product) => {
            if (product.inStock) {
              return (
                <li key={product.name}>
                  <img
                    title={product.name}
                    src={`${product.name}.svg`}
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="button-container">
        <Link href="/farm/[farmId]/farm" as={`/farm/${selectedFarm.name}/farm`}>
          <button>More Info</button>
        </Link>
      </div>
      <style jsx>{`
        .container {
          background: #fff;
          padding: 1rem;
          border: 1px solid rgba(46, 91, 255, 0.08);
          border-radius: 5px;
          border: 1px solid var(--light-green);
        }

        h5 {
          text-align: center;
          margin-bottom: 20px;
        }

        a {
          color: var(--light-green);
          font-size: 12px;
        }

        .products-container > p {
          font-size: 12px;
          margin-top: 20px;
        }

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
          margin: 20px 0;
        }

        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        li p {
          font-size: 12px;
        }

        img {
          width: 35px;
          height: 35px;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        .button-container button {
          background: var(--light-green);
          color: var(--dark);
          border-color: var(--light-green);
          border-radius: 5px;
          border-style: solid;
          width: 40%;
          height: 30px;
          outline: none;
          cursor: pointer;
          transition: 0.2s all ease-in-out;
        }

        .button-container button:hover {
          background: var(--white);
          color: var(--light-green);
        }
      `}</style>
    </div>
  );
}
