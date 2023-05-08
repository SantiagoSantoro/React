import React, { useState } from 'react';


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
    <div>
      <h2>Contador</h2>
      <p>Valor actual: {count}</p>
      <p>Stock disponible: {stock}</p>
      <button onClick={increment} disabled={count === stock}>
        Sumar
      </button>
      <button onClick={decrement} disabled={count === 0}>
        Restar
      </button>
      <button onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
