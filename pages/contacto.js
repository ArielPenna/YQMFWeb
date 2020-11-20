import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Container from '../components/Container';

const Contacto = () => {
  return (
    <div>
      <Container>
        <h3 className="my-5 display-4">Contactanos</h3>
        <Nav className="d-flex align-items-center justify-content-center align-middle">
          <div className="d-flex">
            <Nav.Link className="fas fa-envelope fa-8x" href="mailto:contacto@yoquieromisfotos.com.ar">
              <FontAwesomeIcon icon={faEnvelope} color="black" />
            </Nav.Link>
            <Nav.Link className="fab fa-whatsapp fa-8x" href="https://wa.me/5491135365490">
              <FontAwesomeIcon icon={faWhatsapp} color="black" />
            </Nav.Link>
          </div>
          <div className="d-flex">
            <Nav.Link className="fab fa-instagram fa-8x" href="https://www.instagram.com/yoquieromisfotos/">
              <FontAwesomeIcon icon={faInstagram} color="black" />
            </Nav.Link>
            <Nav.Link className="fab fa-facebook fa-8x" href="https://www.facebook.com/yoquieromisfotos">
              <FontAwesomeIcon icon={faFacebookSquare} color="black" />
            </Nav.Link>
          </div>
        </Nav>
      </Container>
      <style jsx>
        {`
          .nav {
            display: Flex;
            flex: 1;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};
export default Contacto;
