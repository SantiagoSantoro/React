import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

export const Item = ({ item }) => (
  <Card style={{ width: "14rem" }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
    <Card.Title>{item.categoria}</Card.Title>
      <Card.Title>{item.marca}</Card.Title>
      <Card.Text>
        Precio: ${item.precio}
      </Card.Text>
      <Button as={Link} to={`/item/${item.id}`}variant="dark">Agregar al carrito</Button>
    </Card.Body>
  </Card>
);
