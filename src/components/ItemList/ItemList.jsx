import { Row, Col } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => (
  <>
    {!list.length && "Loading"}
    <Row>
      {list.slice(0, 4).map((item) => (
        <Col key={item.id}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
    <Row>
      {list.slice(4, 8).map((item) => (
        <Col key={item.id}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  </>
);
// // La función slice se utiliza para separar los elementos de la lista en dos grupos de cuatro elementos cada uno, para crear las dos filas. 
// Luego, para cada elemento de la lista, estamos creando un componente Col y dentro de él estamos renderizando el componente Item con el objeto de la lista correspondiente.