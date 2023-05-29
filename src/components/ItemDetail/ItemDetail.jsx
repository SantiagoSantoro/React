import React, { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    setAddedToCart(true);
    console.log("Producto agregado al carrito:", product);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="item-detail">
      <h1>{product.marca}</h1>
      <p>{product.categoria}</p>
      <div className="button-container">
        {expanded ? (
          <div>
            <p>{product.descripcion}</p>
            <button onClick={toggleExpand} className="btn btn-dark">Mostrar menos</button>
          </div>
        ) : (
          <div>
            <p>{product.descripcion.slice(0, 100)}...</p>
            <button onClick={toggleExpand} className="btn btn-dark">Expandir</button>
          </div>
        )}
      </div>
      <br/>    
      <p>Precio: USD {product.precio}</p>
      <img
        src={product.img}
        alt={product.marca}
      />
      <br />
      {addedToCart ? (
        <Link to="/cart" className="btn btn-dark">Ir al carrito</Link>
      ) : (
        <div className="item-counter-container">
          <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
      )}
    </div>
  );
};


