import { Navbar, Container, Nav } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">X-treme Clothes</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#remeras" className="text-light">
							Remeras
						</Nav.Link>
						<Nav.Link href="#buzos" className="text-light">
							Buzos
						</Nav.Link>
						<Nav.Link href="#accesorios" className="text-light">
							Accesorios
						</Nav.Link>
					</Nav>
					<CartWidget />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

