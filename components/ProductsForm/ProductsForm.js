import { useState } from 'react';

import { useRouter } from 'next/router';

import styles from './ProductsForm.module.css';

export default function ProductsForm({ product }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      name: 'chicken',
      inStock: false,
    },
    {
      name: 'cow',
      inStock: false,
    },
    {
      name: 'pork',
      inStock: false,
    },
    {
      name: 'vegetables',
      inStock: false,
    },
    {
      name: 'seeds',
      inStock: false,
    },
  ]);

  const handleYesClick = (e) => {
    const updatedProducts = products.filter((product) => {
      if (product.name === e.target.value) {
        product.inStock = true;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleNoClick = (e) => {
    const updatedProducts = products.filter((product) => {
      if (product.name === e.target.value) {
        product.inStock = false;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleProductsSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Make edit request to BE
    const res = await fetch('/api/edit-farm', {
      method: 'POST',
      body: JSON.stringify({
        products,
        farm: router.query.farmId,
      }),
    });
    const data = await res.json();
    console.log('data back from saving form', data);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <form className={styles.products} onSubmit={handleProductsSubmit}>
          {products.map((product) => {
            return (
              <div key={product.name}>
                <img
                  title={product.name}
                  src={`/${product.name}.svg`}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <div className="in-stock">
                  <p>In stock?</p>
                  <span>
                    <input
                      type="radio"
                      id={`${product.name}-in-stock-yes`}
                      value={product.name}
                      name={`${product.name}-in-stock`}
                      onClick={handleYesClick}
                    />
                    <label htmlFor={`${product.name}-in-stock-yes`}>Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id={`${product.name}-in-stock-no`}
                      value={product.name}
                      name={`${product.name}-in-stock`}
                      onClick={handleNoClick}
                    />
                    <label htmlFor={`${product.name}-in-stock-no`}>No</label>
                  </span>
                </div>
              </div>
            );
          })}
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}
