import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import cartImg from "./assets/cart.png";
import CartContext from "../../Context/CartContext";

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
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de items en el carrito
  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  if (totalItems === 0) {
    // No mostrar el CartWidget si no hay items en el carrito
    return null;
  }

  return (
    <Link to="/cart">
      <Badge bg="light">
        <img src={cartImg} alt="Changuito" style={styles.img} />
        <span style={styles.span}>{totalItems}</span>
      </Badge>
    </Link>
  );
};



