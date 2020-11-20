import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Tips = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-4 flex-wrap">
      <Card style={{ width: '18rem', background: 'var(--traslucid)' }} className="rounded-lg m-3">
        <div className="fab fa-whatsapp fa-6x">
          <FontAwesomeIcon icon={faWhatsapp} color="black" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'var(--traslucid)' }} className="rounded-lg m-3">
        <div className="fab fa-whatsapp fa-6x">
          <FontAwesomeIcon icon={faWhatsapp} color="black" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'var(--traslucid)' }} className="rounded-lg m-3">
        <div className="fab fa-whatsapp fa-6x">
          <FontAwesomeIcon icon={faWhatsapp} color="black" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'var(--traslucid)' }} className="rounded-lg m-3">
        <div className="fab fa-whatsapp fa-6x">
          <FontAwesomeIcon icon={faWhatsapp} color="black" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Tips;
