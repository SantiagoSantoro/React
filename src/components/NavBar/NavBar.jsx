import { Navbar, Container, Nav } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" >
			<Container>
				<Navbar.Brand href="#home">X-treme Clothes</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#remeras">Remeras</Nav.Link>
						<Nav.Link href="#buzos">Buzos</Nav.Link>
						<Nav.Link href="#accesorios">Accesorios</Nav.Link>
					</Nav>
					<CartWidget />
			</Container>
		</Navbar>
	);
};

