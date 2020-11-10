import Head from 'next/head';

import Container from '../components/Container';

const Contacto = () => {
  return (
    <div>
      <Container>
        <form className="customForm">
          <div className="form-group">
            <label for="Nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" />
          </div>
          <div className="form-group">
            <label for="email">E-mail</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="telefono">Whatsapp</label>
            <input type="number" className="form-control" id="telefono" />
          </div>
          <div className="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea className="form-control" id="mensaje"></textarea>
          </div>
          <button
            // onClick={EnviarMail()}
            value="Enviar"
            type="button"
            name="enviar"
            className="btn btn-outline-success btn-lg">
            Enviar
          </button>
        </form>
      </Container>
    </div>
  );
};
export default Contacto;
