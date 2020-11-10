import Head from 'next/head';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = (props) => (
  <div>
    <Head>
      <title>Yo Quiero Mis Fotos</title>
      <link rel="icon" href="/icon.png" type="image/png" />
    </Head>
    <NavBar />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;
