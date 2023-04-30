import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import flag from '../assets/Anarchist_flag_2.svg'

const TransnationalUtopias = (props) => {


    return <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="Anarchist Flag"
                        src={flag}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Transnational Utopias
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/queerness-and-anarchism">Queerness and Anarchism</Nav.Link>
                    <NavDropdown title="Biographies">
                        <NavDropdown.Item as={Link} to="/amelio-robles-avila">Amelio Robles Ávila</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/irina-layevska">Irina Layevska</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/luisa-capetillo">Luisa Capetillo</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/limitations">Limitations in Historiography</Nav.Link>
                    <Nav.Link as={Link} to="/sources">Sources</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
}

export default TransnationalUtopias;