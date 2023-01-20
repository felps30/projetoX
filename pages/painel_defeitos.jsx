import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderComponent from "../components/common/header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Artemis(){
    return (
         <>
      <Head>
        <title>Projeto X</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
         <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet"/>
      </Head>
      <HeaderComponent></HeaderComponent>
      <main className={styles.main}> 
          <h1>Tela Painel de Defeitos</h1>
          <div className={styles.input_defeito}>
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Número do Defeito EISA"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
      </InputGroup>
      <InputGroup className="mb-3">
            <Form.Control
                placeholder="Número do Defeito Vivo"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
      </InputGroup>

          </div>
      </main>
         </>
    ) 
 }