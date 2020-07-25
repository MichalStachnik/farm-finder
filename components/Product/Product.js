import { useState, useCallback } from 'react';
import Link from 'next/link';

import Suggestions from '../Suggestions/Suggestions';

import styles from './Product.module.css';

export default function Product({ product }) {
  return (
    <div key={product} className={styles.product}>
      <img title={product} src={`/${product}.svg`} alt={product} />
      <p>{product}</p>
      <div className="in-stock">
        <p>In stock?</p>
        <span>
          <input
            type="radio"
            id="in-stock-yes"
            value={`${product}-yes`}
            name={`${product}-in-stock`}
          />
          <label htmlFor="in-stock-yes">Yes</label>
        </span>
        <span>
          <input
            type="radio"
            id="in-stock-no"
            value={`${product}-no`}
            name={`${product}-in-stock`}
          />
          <label htmlFor="in-stock-no">No</label>
        </span>
      </div>
    </div>
  );
}
