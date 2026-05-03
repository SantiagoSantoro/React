import { Row, Col } from "react-bootstrap";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ list }) => {
  if (!list.length) {
    return (
      <p className="empty-catalog">
        No hay productos para mostrar. Probá otra categoría o volvé más tarde.
      </p>
    );
  }

  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="g-4 item-list-row">
      {list.map((item) => (
        <Col key={item.id}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  );
};
