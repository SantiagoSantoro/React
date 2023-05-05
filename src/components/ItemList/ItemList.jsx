import { Row, Col } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => (
  <>
    {!list.length && <div className="loading">Loading...</div>}
    <Row xs={1} sm={2} md={4} className="g-4">
      {list.map((item) => (
        <Col key={item.id}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  </>
);
