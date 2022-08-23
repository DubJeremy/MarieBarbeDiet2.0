import React from "react";

import HealthyPlate from "../svgs/healthyplate.svg";

import styles from "./presentation.module.scss";

function Presentation() {
    return (
        <div className={styles.presentation}>
            <h2>MON PARCOURS</h2>
            <div className={styles.txtimage}>
                <div className={styles.background}>
                    <p>
                        Forte d&apos;une expérience d&apos;infirmière diplômée
                        d&apos;état, auprès de différents publics, j&apos;ai
                        effectué une reconversion professionnelle dans le
                        domaine de la nutrition.
                    </p>
                    <p>
                        Passionnée de diététique et adorant la cuisine, je me
                        suis naturellement orientée vers ce domaine.
                    </p>
                    <p>
                        Aujourd&apos;hui, je suis prête à vous aider et vous
                        apporter toute la positivité nécessaire afin de mettre
                        en oeuvre des changements qui vous apporteront le suivi
                        de santé et le bien être que vous recherchez.
                    </p>
                    <p>
                        Je m&apos;engage à créer un lien avec chaque patient qui
                        cherche à perdre ou contrôler son poids; à faire face à
                        une maladie chronique, suivi de grossesse; pathologies
                        de l&apos;enfant ...
                    </p>
                    <p>
                        Située sur Bordeaux et ses alentours, Marie
                        Diététicienne Nutritionniste est une Diététicienne
                        professionnelle, spécialisée dans la thérapie
                        nutritionnelle et l&apos;éducation alimentaire.
                    </p>
                    <p>
                        Marie Diététicienne Nutritionniste est aux côtés de ses
                        patients pour améliorer leur qualité de vie.
                    </p>
                    <p>
                        Pour apprendre à adopter un mode de vie plus sain,
                        prenez contact.
                    </p>
                    <p>Prenez les devants,</p>
                    <p>Créez votre changement.</p>
                </div>
                {/* <div className={styles.illustration}>
                    <HealthyPlate />
                </div> */}
            </div>
        </div>
    );
}

export default Presentation;
