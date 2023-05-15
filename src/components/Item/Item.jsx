import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

export const Item = ({ item }) => (
  <Card style={{ width: "14rem",  }}>
    <Card.Img variant="top" src={item.img} style={{height: "14rem" }}/>
    <Card.Body className="text-center">
      <Card.Title>{item.categoria}</Card.Title>
      <Card.Title>{item.marca}</Card.Title>
      <Card.Text>
        Precio: USD${item.precio}
      </Card.Text>
      <Button as={Link} to={`/item/${item.id}`} variant="dark">
        Ver Detalles
      </Button>
    </Card.Body>
  </Card>
);


