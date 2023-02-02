import "@/styles/navbar.module.css"
import styles from "@/styles/navbar.module.css"
import Link from "next/link"


export default function NavBar(props){

    const jfClick = props["jf"];
    const joinClick = props["join"];
    const contactClick = props["contact"];
    const newsClick = props["news"];

    return (
        <>
        
        <nav className={styles.navbar}>
            <Link href={"https://www.rinteln.de/"}>
                <img src={"/logoRinteln.png"} className={styles.logo} width={60} height={60}></img>
            </Link>
            
            <ul className={styles.navLinks}>
                <li>
                    <button id="scrollNews" onClick={newsClick}>Aktuelles</button>
                </li>
                <li>
                    <button id="scrollJF" onClick={jfClick}>Jugend-Feuerwehr</button>
                </li>
                <li>
                    <button id="scrollJoin" onClick={joinClick}>Mitgleid werden</button>
                </li>
                <li>
                    <button id="scrollContact" onClick={contactClick}>Kontakt</button>
                </li>
            </ul>
        </nav>
        </>

    )
}