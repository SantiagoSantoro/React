import { useContext, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0),
    [cart]
  );

  if (cart.length === 0) {
    return (
      <Container className="py-5 px-3 cart-empty text-center">
        <p className="cart-empty-msg mb-4">Tu carrito está vacío.</p>
        <Link to="/" className="btn btn-dark rounded-pill px-4">
          Ver productos
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-4 px-3 cart-page">
      <h2 className="cart-page-title text-center mb-4">Carrito</h2>
      <Row className="g-4 justify-content-center">
        {cart.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <div className="cart-item">
              <img
                src={item.img}
                alt={item.nombre || item.marca || "Producto"}
                className="cart-item-img"
              />
              <h3 className="cart-item-name">
                {item.nombre || item.marca}
              </h3>
              <p className="cart-item-meta">USD {item.precio} · Cantidad: {item.cantidad}</p>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm rounded-pill"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </Col>
        ))}
      </Row>

      <div className="cart-summary card border-0 shadow-sm mt-4 mx-auto">
        <p className="cart-total mb-3">Total: USD {total.toFixed(2)}</p>
        <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-stretch">
          <button type="button" className="btn btn-outline-dark rounded-pill" onClick={clear}>
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="btn btn-danger rounded-pill text-white text-decoration-none text-center"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </Container>
  );
};
