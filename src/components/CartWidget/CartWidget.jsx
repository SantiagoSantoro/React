import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import cartImg from "./assets/cart.png";
import CartContext from "../../context/CartContext.jsx";

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

  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  if (totalItems === 0) {
    return null;
  }

  return (
    <Link
      to="/cart"
      className="text-decoration-none cart-widget-link"
      aria-label={`Carrito: ${totalItems} artículos`}
    >
      <Badge bg="light" text="dark" pill className="d-inline-flex align-items-center gap-2 px-2 py-1">
        <img src={cartImg} alt="" width={22} height={22} className="cart-widget-icon" />
        <span className="fw-semibold">{totalItems}</span>
      </Badge>
    </Link>
  );
};
