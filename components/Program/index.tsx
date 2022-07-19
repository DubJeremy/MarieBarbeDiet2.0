import React from "react";

import Bawl from "../svgs/bawl.svg";

import styles from "./program.module.scss";

function Program() {
    return (
        <div className={styles.program}>
            <h2>Programme</h2>
            <div className={`${styles.first} ${styles.appointment}`}>
                <div className={styles.containerLeft}>
                        <h4>Compter environ 1 heure</h4>
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
                    <div className={styles.glassEffect}></div>
                </div>
                <div className={styles.containerRight}>
                    <h3>Première consultation / Bilan</h3>
                </div>
            </div>
            <div className={`${styles.next} ${styles.appointment}`}>
                <div className={styles.containerLeft}>
                    <h3>Consultations de suivi</h3>
                </div>
                <div className={styles.containerRight}>
                        <h4>Environ 30 min</h4>
                    <div className={styles.center}>
                        <p>Prise en compte de votre ressenti</p>
                        <p>Mise en évidence de votre évolution</p>
                        <p>
                            Adaptation du plan alimentaire en fonction de vos
                            besoins
                        </p>
                        <p>
                            Réponses à vos questions et conseils personnalisés
                        </p>
                    </div>
                    <div className={styles.glassEffect}></div>
                </div>
            </div>
        </div>
    );
}

export default Program;
