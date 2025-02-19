/* NavBar React-Bootstrap */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';
import { NavLink } from 'react-router-dom';

function NavBarRB() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
        <img className="logo-nav" src="./img/main.png" alt="Ecommerce"/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/nuevos">Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/ofertas">Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/mas vendidos">Mas Vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart'>
          <CartWidgetRI/>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;