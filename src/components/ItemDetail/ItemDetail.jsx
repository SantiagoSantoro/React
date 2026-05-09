import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const descripcion = product.descripcion?.trim() ?? "";
  const preview =
    descripcion.length > 140 ? `${descripcion.slice(0, 140)}…` : descripcion;

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    setAddedToCart(true);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="item-detail card border-0 shadow">
      <Row className="g-4 align-items-center">
        <Col xs={12} md={6} className="text-center">
          <img
            src={product.img}
            alt={product.marca || product.nombre || "Producto"}
            className="item-detail-img img-fluid rounded-3 shadow-sm"
          />
        </Col>
        <Col xs={12} md={6}>
          <p className="item-detail-category text-muted small text-uppercase mb-1">
            {product.categoria}
          </p>
          <h1 className="item-detail-title">{product.marca}</h1>
          <p className="item-detail-price mb-3">USD {product.precio}</p>

          {descripcion ? (
            <div className="item-detail-desc mb-4">
              {expanded ? (
                <>
                  <p className="mb-2">{descripcion}</p>
                  {descripcion.length > 140 && (
                    <button
                      type="button"
                      onClick={toggleExpand}
                      className="btn btn-outline-dark btn-sm rounded-pill"
                    >
                      Mostrar menos
                    </button>
                  )}
                </>
              ) : (
                <>
                  <p className="mb-2">{preview}</p>
                  {descripcion.length > 140 && (
                    <button
                      type="button"
                      onClick={toggleExpand}
                      className="btn btn-outline-dark btn-sm rounded-pill"
                    >
                      Expandir
                    </button>
                  )}
                </>
              )}
            </div>
          ) : null}

          {addedToCart ? (
            <Link to="/cart" className="btn btn-dark rounded-pill px-4">
              Ir al carrito
            </Link>
          ) : (
            <div className="item-counter-container">
              <ItemCount stock={product.stock} onAdd={onAdd} />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};
