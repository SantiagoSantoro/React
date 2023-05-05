import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link } from 'react-router-dom';


import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">X-treme Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/Tablas">Tablas</Nav.Link>
            <Nav.Link as={Link} to="/category/Remeras">Remeras</Nav.Link>
            <Nav.Link as={Link} to="/category/Accesorios">Accesorios</Nav.Link>
          </Nav>
          <div className="d-flex justify-content-center align-items-center">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



