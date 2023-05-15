import React, { useContext } from "react";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import CartContext from "../../Context/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <div className="text-center" >
      <h1 style={{ color: "white", fontSize: "2rem" }}>{product.marca}</h1>
      <p style={{ color: "white", fontSize: "20px" }}>{product.categoria}</p>
      <p style={{ color: "white", fontSize: "18px", fontWeight: "Montserrat" }}>
        {product.descripcion}
      </p>
      <p style={{ color: "white", fontSize: "30px", fontWeight: "Montserrat" }}>
        USD${product.precio}
      </p>
      <img
        src={product.img}
        alt={product.marca}
		style={{ maxWidth: "50%", height: "auto", borderRadius: "10px" }}
      />
      <ItemCounter stock={product.stock} onAdd={onAdd} />
    </div>
  );
};



//poner un fondo en el item detail para que se vea un fondo. Suma, restar y poner abajo Agregar al carrito./