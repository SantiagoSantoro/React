import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Item = ({ item }) => (
  <Card style={{ width: "14rem" }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.marca}</Card.Title>
      <Card.Text>
        Precio: ${item.precio}
      </Card.Text>
      <Button variant="dark">Agregar al carrito</Button>
    </Card.Body>
  </Card>
);
