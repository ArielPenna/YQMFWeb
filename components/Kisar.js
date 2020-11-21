const Kisar = () => {
  return (
    <section classname="main">
      <h3 className="display-4">Fotografía y Video para tu evento</h3>
      <p>KISAR PRODUCCIONES – Capturando Emociones</p>
      <div className="d-flex row text-wrap justify-content-center">
        <img className="pictures" style={{ height: '280px', width: '280px' }} src="/boda.jpg"></img>
        <img className="pictures" style={{ height: '280px', width: '280px' }} src="/danza.jpg"></img>
        <img className="pictures" style={{ height: '280px', width: '280px' }} src="/15.jpg"></img>
      </div>
      <a className="btn btn-warning" href="#">
        Contactanos
      </a>
      <style jsx>
        {`
          section {
            display: Flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
            background-image: url('/boqueh.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            height: auto;
            color: white;
          }
          ,
          .pictures {
            border-radius: 5px;
            margin: 10px;
          }
        `}
      </style>
    </section>
  );
};
export default Kisar;
