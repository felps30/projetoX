import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderComponent from "../components/common/header";

export default function FastJeri(){
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
          <h1>Tela Fast Profile Jeri</h1>
      </main>
         </>
    ) 
 }