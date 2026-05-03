import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          X-treme Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Tablas">
              Tablas
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Remeras">
              Remeras
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Accesorios">
              Accesorios
            </Nav.Link>
          </Nav>
          <div className="ms-md-2 mt-2 mt-md-0 d-flex justify-content-center align-items-center">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
