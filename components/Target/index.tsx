import React from "react";

import Card from "./Cards";
import { CardsContent } from "./Cards/cardsContent";

import styles from "./target.module.scss";

function Target() {
    return (
        <div id="target" className={styles.target}>
            {CardsContent.map((card, index) => (
                <div key={index} className={styles.cards}>
                    <Card title={card.title} desc={card.desc} />
                </div>
            ))}
        </div>
    );
}

export default Target;
