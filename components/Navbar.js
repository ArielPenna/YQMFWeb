import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <Navbar bg="warning" expand="md">
      <Navbar.Brand href="/">
        <img src="/logo.png" width="210" height="50" className="d-inline-block align-top" alt="YQMF logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="/fotos">Fotos</NavDropdown.Item>
            <NavDropdown.Item href="/fotolibros">Fotolibros</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Nav class="d-flex">
          <Nav.Link className="fab fa-instagram fa-2x" href="https://www.instagram.com/yoquieromisfotos/">
            <FontAwesomeIcon icon={faInstagram} color="black" />
          </Nav.Link>
          <Nav.Link className="fab fa-facebook fa-2x" href="https://www.facebook.com/yoquieromisfotos">
            <FontAwesomeIcon icon={faFacebookSquare} color="black" />
          </Nav.Link>
          <Nav.Link className="fab fa-whatsapp fa-2x" href="https://wa.me/5491135365490">
            <FontAwesomeIcon icon={faWhatsapp} color="black" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
