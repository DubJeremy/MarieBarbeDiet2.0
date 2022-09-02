import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import One from "../../public/images/1.svg";
import Two from "../../public/images/2.svg";
import Three from "../../public/images/3.svg";
import Four from "../../public/images/4.svg";

import styles from "./summary.module.scss";

function Summary() {
    return (
        <div id="summary" className={styles.summary}>
            <div className={styles.backgroundVege}></div>
            <h2>SOMMAIRE</h2>
            <div className={styles.summaryList}>
                <Link href="#services">
                    <div className={`${styles.link} ${styles.one}`}>
                        <a className={styles.services}>Pour qui ?</a>
                        <div className={styles.svg}>
                            <One />
                        </div>
                    </div>
                </Link>
                <Link href="#appointment">
                    <div className={`${styles.link} ${styles.two}`}>
                        <a className={styles.appointment}>
                            Détail des consultations
                        </a>
                        <div className={styles.svg}>
                            <Two />
                        </div>
                    </div>
                </Link>
                <Link href="#faq">
                    <div className={`${styles.link} ${styles.three}`}>
                        <a className={styles.faq}>Foire aux questions</a>
                        <div className={styles.svg}>
                            <Three />
                        </div>
                    </div>
                </Link>
                <Link href="#contact">
                    <div className={`${styles.link} ${styles.four}`}>
                        <a className={styles.contact}>Contact</a>
                        <div className={styles.svg}>
                            <Four />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Summary;
