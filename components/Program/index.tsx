import React from "react";

import Bawl from "../svgs/bawl.svg";

import styles from "./program.module.scss";

function Program() {
    return (
        <div id="appointment" className={styles.program}>
            <h2>PROGRAMME</h2>
            <div className={`${styles.first} ${styles.appointment}`}>
                <div className={`${styles.container} ${styles.left}`}>
                    <div className={styles.glassEffect}></div>
                    <div className={styles.txt}>
                        <p className={styles.time}>Compter environ 1 heure</p>
                        <div className={styles.center}>
                            <p>Bilan complet</p>
                            <p>
                                Mise en évidence des points positifs et des
                                difficultés
                            </p>
                            <p>Définition du plan alimentaire personnalisé</p>
                            <p>
                                Mise en place du suivi pour préparer
                                l&apos;accompagnement
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.title} ${styles.right}`}>
                    <h3>Première consultation / Bilan</h3>
                </div>
            </div>
            <div className={`${styles.second} ${styles.appointment}`}>
                <div className={`${styles.title} ${styles.left}`}>
                    <h3>Consultations de suivi</h3>
                </div>
                <div className={`${styles.container} ${styles.right}`}>
                    <div className={styles.glassEffect}></div>
                    <div className={styles.txt}>
                        <p className={styles.time}>Environ 30 min</p>
                        <div className={styles.center}>
                            <p>Prise en compte de votre ressenti</p>
                            <p>Mise en évidence de votre évolution</p>
                            <p>
                                Adaptation du plan alimentaire en fonction de
                                vos besoins
                            </p>
                            <p>
                                Réponses à vos questions et conseils
                                personnalisés
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program;
