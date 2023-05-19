import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import cart from "./assets/cart.png";
import { CartProvider } from "../../Context/CartContext";

const styles = {
  span: {
    paddingLeft: 10,
    color: "black",
  },
  img: {
    height: 30,
  },
};

export const CartWidget = () => {
  const { cartItems } = useContext(CartProvider);

  // Calcular la cantidad total de items en el carrito
  const totalItems = cartItems.reduce((total, item) => total + item.cantidad, 0);

  if (totalItems === 0) {
    // No mostrar el CartWidget si no hay items en el carrito
    return null;
  }

  return (
    <Badge bg="light">
      <img src={cart} alt="Changuito" style={styles.img} />
      <span style={styles.span}>{totalItems}</span>
    </Badge>
  );
};



