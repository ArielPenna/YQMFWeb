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
      <div>
        <h3 className="mt-4 display-4">"Imprimi tus fotos, ¡antes que pierdas la memoria!"</h3>
        <p>Nunca te paso que por no imprimir tus fotos terminas perdiendolas o sin saber ¿donde estan?, Bueno ya no más, ahora es tan fácil y rápido que no tenes excusa!!</p>
      </div>
      <style jsx>
        {`
          p {
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};
export default Tips;
