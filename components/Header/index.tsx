import { AnimatePresence, motion } from "framer-motion";

import { Flip } from "./motionHeader";
import BackgroundVege from "../svgs/vegetables.svg";
import LogoMBD from "../svgs/MarieBarbé.svg";
import PhotoMB from "../svgs/fdp1.svg";

import styles from "./header.module.scss";
import { useState } from "react";
import Link from "next/link";

function Header() {
    const [revealPresentation, setRevealPresentation] = useState(false);
    console.log();

    const reveal = () => {
        setRevealPresentation(!revealPresentation);
    };

    return (
        <div className={styles.header}>
            <div className={styles.logoTitle}>
                <div className={styles.logo}>
                    <LogoMBD />
                </div>
                <h1>
                    <p>Diététicienne,</p>
                    <p>Nutritionniste.</p>
                </h1>
            </div>
            <div className={styles.content}>
                <AnimatePresence custom={revealPresentation}>
                    <motion.div
                        className={styles.photoMB}
                        // custom={revealPresentation}
                        // variants={Flip}
                        // initial="init"
                        // animate="start"
                        // animate={{rotateY: revealPresentation ? 180 : 0}}
                        // exit="exit"
                    >
                        <div className={styles.reveal}>
                            <PhotoMB />
                        </div>
                        {/* <p className={styles.reveal}>
                            Forte d&apos;une expérience d&apos;infirmière
                            diplômée d&apos;état, auprès de différents publics,
                            j&apos;ai effectué une reconversion professionnelle
                            dans le domaine de la nutrition.
                        </p> */}
                    </motion.div>
                </AnimatePresence>
                <div className={styles.intro}>
                    <h2>Hey, je suis Marie.</h2>
                    <p>
                        Je vous aide à adapter votre alimentation grâce à un
                        programme et un suivi personnalisé. Mon but : Vous
                        permettre d’améliorer votre santé.
                    </p>
                    <Link href="#summary">
                        <div className={styles.plus} onClick={() => reveal()}>
                            +
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
