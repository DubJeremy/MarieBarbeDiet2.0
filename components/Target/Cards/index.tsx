import React from "react";

import styles from "./card.module.scss";

interface ContentCard {
    title: string;
    desc: string;
}

function index(props: ContentCard) {
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default index;
