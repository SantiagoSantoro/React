import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ item }) => {
  const title = item.nombre || item.marca || "Producto";

  return (
    <Card className="product-card h-100 border-0 shadow-sm">
      <div className="product-card-img-wrap">
        <Card.Img
          variant="top"
          src={item.img}
          alt={title}
          className="product-card-img"
        />
      </div>
      <Card.Body className="d-flex flex-column text-center">
        <Card.Subtitle className="text-muted small mb-1 text-uppercase">
          {item.categoria}
        </Card.Subtitle>
        <Card.Title className="product-card-title">{item.marca}</Card.Title>
        <Card.Text className="product-card-price mb-3">
          USD ${item.precio}
        </Card.Text>
        <Button
          as={Link}
          to={`/item/${item.id}`}
          variant="dark"
          className="mt-auto rounded-pill px-4"
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
};
