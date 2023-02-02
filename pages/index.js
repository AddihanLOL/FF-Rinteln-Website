import Head from "next/head"
import "@/styles/index.module.css"
import styles from "@/styles/index.module.css"
import React, { useRef } from 'react';
import NavBar from "./components/NavBar.js"

import News from "@/public/news.json"



export default function Home() {    
    const jfDiv = useRef(null);
    const joinDiv = useRef(null);
    const contactDiv = useRef(null);
    const newsDiv = useRef(null);

    const jfClick = () => {
        jfDiv.current.scrollIntoView({ behavior: 'smooth' });
    };
    const joinClick = () => {
        joinDiv.current.scrollIntoView({ behavior: 'smooth' });
    };
    const contactClick = () => {
        contactDiv.current.scrollIntoView({ behavior: 'smooth' });
    };
    const newsClick = () => {
        newsDiv.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <div className={styles.header}>
            <img src={"./background.png"} className={styles.thumbnail} />
            <span className={styles.titel}>
                Freiwillige Feuerwehr Rinteln
            </span>

        </div>
        <div className={styles.container}>
            <NavBar jf={jfClick} join={joinClick} contact={contactClick} news={newsClick}></NavBar>
            
            
            <div className={styles.news} ref={newsDiv}>
                <h1>Aktuelles</h1>
                <div className={styles.card}>
                    <h2>{News["title"]}</h2>
                    <span>{News["value"]}</span>
                    <h5>{News["date"]}</h5>
                </div>

                <img src={"./images/315981355_508876777950579_1750996421873977670_n.jpg"} className={styles.newsImageBottom} />
                <img src={"./images/318723065_1879910239012519_1063188433890244806_n.jpg"} className={styles.newsImageRight}/>
            </div>
            <div className={styles.jf} ref={jfDiv}>
                <h1>Kinder und Jugendfeuerwehr</h1>
            </div>
            <div className={styles.join} ref={joinDiv}>
                <h1>Mitglied werden</h1>
            </div>
            <div className={styles.contact} ref={contactDiv}>
                <h1>Kontakt</h1>
            </div>
            <div className={styles.impressum} id="impressum">
                <h1>impressum</h1>
            </div>
        </div>
        </>
        
    )
  }
  