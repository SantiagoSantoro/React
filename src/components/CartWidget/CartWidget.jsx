import Badge from "react-bootstrap/Badge";
import cart from "./assets/cart.png";

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
  return (
    <Badge bg="light">
      <img src={cart} alt="Changuito" style={styles.img} />
      <span style={styles.span}>0</span>
    </Badge>
  );
};
