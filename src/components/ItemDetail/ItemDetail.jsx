import React, { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import "./ItemDetail.css"

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    setAddedToCart(true);
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <div className="item-detail">
      <h1>{product.marca}</h1>
      <p>{product.categoria}</p>
      <p>{product.descripcion}</p>
      <p>Precio: USD {product.precio}</p>
      <img
        src={product.img}
        alt={product.marca}
        style={{ width: "50%", height: "auto", borderRadius: "10px" }}
      />
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

