import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent() {
  return (
        <>
    <>
      <Navbar className={styles.navbar} >
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/eisan.svg"
              width="150"
              height="150"
              // margin-left="50px"
              // className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Container className={styles.navContainer}>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="brok">Brok</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="/checa_pacote">Checa Pacotes</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="/fast_profile">Fast Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="/fast_jeri">Fast Profile Jeri</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="gerador_estrutura">Gerador de Estruturas</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="prints">Gerador de Prints</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="painel_defeitos">Painel de Defeitos</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.nav}>
        <Nav.Link href="painel_demandas">Painel de Demandas</Nav.Link>
      </Nav.Item>
      </Container>
      </Navbar>
      
    </>
        </>
  );
}

export default HeaderComponent;