import Head from 'next/head';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = (props) => (
  <div>
    <Head>
      <html lang="es"></html>
      <title>Yo Quiero Mis Fotos</title>
      <link rel="icon" href="/icon.png" type="image/png" />
    </Head>
    <NavBar />
    <main className="container p-4 text-center">{props.children}</main>
    <style jsx>
      {`
        main {
          min-height: 100vh;
          min-width: 100vw;
          background-color: var(--yellow);
          background-image: url('/stain.png');
          background-position: center;
          background-repeat: repeat;
        }
      `}
    </style>
  </div>
);

export default Container;
