import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderComponent from "../components/common/header";


export default function Home() {
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
      <div className={styles.initial}>
        <h1>Bem vindo ao projeto X</h1>
        <p>Este sistema tem como objetivo agregar diversas melhorias que temos no time de PeS</p>
        <p>Você pode acessar todos nossos módulos pelo menu acima e caso tenha alguma dúvida</p>
        <p>pode acessar nossa Wiki abaixo!</p>
        <Button className={styles.btHome} href="http://wiki.eisa.corp.com/display/PPSVIVO/SISAP">
          Wiki Projeto X
        </Button>
      </div>
       
      </main>
    </>
  )
}
