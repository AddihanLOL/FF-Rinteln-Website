import Head from "next/head"
import styles from "./Home.module.css"
import React, { useRef } from 'react';
import NavBar from "./components/NavBar"


export default function Home() {
    
    const jfDiv = useRef(null);
    const joinDiv = useRef(null);
    const contactDiv = useRef(null);

    const jfClick = () => {
        jfDiv.current.scrollIntoView({ behavior: 'smooth' });
    };
    const joinClick = () => {
        joinDiv.current.scrollIntoView({ behavior: 'smooth' });
    };
    const contactClick = () => {
        contactDiv.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        
        <div className={styles.container}>
            
            <div className={styles.introduction} id="intruduction">
                <NavBar jf={jfClick} join={joinClick} contact={contactClick}></NavBar>
                <h1>Einleitung</h1>
            </div>

            <div className={styles.jf} ref={jfDiv}>
                <h1>JugendFeuerwehr</h1>
            </div>
            <div className={styles.join} ref={joinDiv}>
                <h1>Mitlgied werden</h1>
            </div>
            <div className={styles.contact} ref={contactDiv}>
                <h1>Kontakt</h1>
            </div>

        </div>
        </>
    )
  }
  