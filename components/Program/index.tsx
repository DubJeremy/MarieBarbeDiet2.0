import React from "react";

import BackgroundVege from "../svgs/vegetables.svg";

import styles from "./program.module.scss";

function Program() {
    return (
        <div className={styles.program}>
            <div className={styles.backgroundVege}>
                <BackgroundVege />
            </div>
        </div>
    );
}

export default Program;
