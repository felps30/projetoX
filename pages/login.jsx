import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Head from 'next/head'
import styles from '../styles/Home.module.css'




export default function Login(){
   return (
      <>
      <Head>
        <title>Projeto X </title>
        <meta name="description" content="Programa de parametrização" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
         <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        <div className={styles.login}>
        <h1>
            Projeto X
         </h1>
            <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" required>
        <Form.Label>Usuário</Form.Label>
        <Form.Control type="email" placeholder="Usuário da rede" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" required>
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" required />
      </Form.Group>
      <Button className = {styles.buttonLogin}variant="primary" type="submit" href="/">
        Entrar
      </Button>
    </Form>
         </div>
        <Form.Text className={styles.text_muted}>
        *Utilize o mesmo login e senha da rede.
        </Form.Text>
        </div>
         
      </main>
     </>
   ) 
}