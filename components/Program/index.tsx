import React from "react";

import Bawl from "../svgs/bawl.svg";

import styles from "./program.module.scss";

function Program() {
    return (
        <div className={styles.program}>
            <div className={styles.svgBackground}>
                <Bawl />
            </div>
            <h2>Programme</h2>
            <div className={styles.appointment}>
                <h3>Première consultation / Bilan</h3>
                <h4>Compter environ 1 heure</h4>
                <p>Bilan complet</p>
                <p>Mise en évidence des points positifs et des difficultés</p>
                <p>Définition du plan alimentaire personnalisé</p>
                <p>
                    Mise en place du suivi pour préparer l&apos;accompagnement
                </p>
            </div>
            <div className={styles.appointment}>
                <h3>Consultations de suivi</h3>
                <h4>Environ 30 min</h4>
                <p>Prise en compte de votre ressenti</p>
                <p>Mise en évidence de votre évolution</p>
                <p>Adaptation du plan alimentaire en fonction de vos besoins</p>
                <p>Réponses à vos questions et conseils personnalisés</p>
            </div>
        </div>
    );
}

export default Program;
