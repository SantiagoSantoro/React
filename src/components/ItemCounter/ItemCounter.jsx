import React, { useState } from 'react';
import './ItemCounter.css';

export const ItemCounter = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-counter">
      <div className="counter-row">
        <button
          className="btn btn-dark"
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </button>
        <p className="count">{count}</p>
        <button
          className="btn btn-dark"
          onClick={increment}
          disabled={count === stock}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-dark add-to-cart"
        onClick={() => onAdd(count)}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
      {/* <p className="stock">Stock disponible: {stock}</p> */}
    </div>
  );
};

