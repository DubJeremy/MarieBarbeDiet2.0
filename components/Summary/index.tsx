import React from 'react';
import Link from 'next/link'

import BackgroundVege from "../svgs/vegetables.svg";

import styles from './summary.module.scss'

function Summary() {
    return (
        <div className={styles.summary}>
            <div className={styles.backgroundVege}>
                {/* <BackgroundVege /> */}
            </div>
            <div className={styles.summaryList}>
                <Link href="#appointment" >
                    <a>Détail des consultations</a>
                </Link>
                <Link href="#usercategories" scroll>
                    <a>Pour qui?</a>
                </Link>
                <Link href="#faq">
                    <a>Foire aux questions</a>
                </Link>       
            </div>
        </div>
    );
}

export default Summary;