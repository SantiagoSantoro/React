import Container from "react-bootstrap/Container";

export const ItemListContainer = ({greeting}) => {
   return (<Container className="mt-4"><h1 className="title">{greeting}</h1></Container>);
}
