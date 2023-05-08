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
    <div className="container">
      <p className="count">Cantidad: {count}</p>
      <p className="stock">Stock disponible: {stock}</p>
      <button
        className="btn btn-dark"
        onClick={() => {
          increment();
          onAdd();
        }}
        disabled={count === stock}
      >
        Agregar al carrito
      </button>
      <button
        className="btn btn-dark"
        onClick={decrement}
        disabled={count === 0}
      >
        Restar del carrito
      </button>
    </div>

  );
};
