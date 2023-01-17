import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './footer'

function Footer() {
  return (
        <>
    <>
      <Navbar className={styles.footer}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/eisan.svg"
              width="150"
              height="150"
              margin-left="-5px"
            //   className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Container>
          <Nav.Item className={styles.nav}>
        <Nav.Link href="/checa_pacote">Checa Pacotes</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="gerador_estrutura">Gerador de Estruturas</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="prints">Gerador de Prints</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="artemis">
          Artemis
        </Nav.Link>
      </Nav.Item>
      </Container>
      </Navbar>
    </>
        </>
  );
}

export default HeaderComponent;