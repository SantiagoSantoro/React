import React, { useContext } from "react";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import CartContext from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import "./ItemDetail.css"


export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
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
      <div className="item-counter-container">
        <ItemCounter stock={product.stock} onAdd={onAdd} />
      </div>
      <Link to="/cart" className="btn btn-dark">Ir al carrito</Link>
    </div>
  );
};



//poner un fondo en el item detail para que se vea un fondo. Suma, restar y poner abajo Agregar al carrito./