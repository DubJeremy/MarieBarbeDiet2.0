import React from "react";

import ChildEating from "../svgs/childEating.svg";
import FoodOnFork from "../svgs/foodOnFork.svg";
import FoodPlate2 from "../svgs/foodPlate2.svg";
import FoodPlate3 from "../svgs/foodPlate2.svg";
import WomanCooking from "../svgs/womanCooking.svg";
import WomanCooking1 from "../svgs/womanCooking1.svg";
import WomanPregnant from "../svgs/WomanPregnant.svg";
import WomanPregnant1 from "../svgs/WomanPregnant1.svg";


import styles from "./target.module.scss";

function Target() {
    return (
        <div id="target" className={styles.target}>
            {/* {CardsContent.map((card, index) => (
                <div key={index} className={styles.cards}>
                    <Card title={card.title} desc={card.desc} />
                </div>
            ))} */}
            <h2>SERVICES</h2>
            <div>
                <h3>Perte de Poids</h3>
                <h3>Pathologie</h3>
                <h3>Femme Enceinte/Allaitante</h3>
                <h3>
                    Enfant/Adolescent
                </h3>
                <p className={styles.left}>Réequilibrage alimentaire</p>
                <p className={styles.right}>Les conseils dont vous avez besoin pour prendre votre santé en main</p>
                <p className={styles.left}>Préparez l&apos;arrivée de votre bébé en toute sérénité</p>
                <p className={styles.right}>Les clés pour une bonne croissance (-16ans)</p>
            </div>
        </div>
    );
}

export default Target;
