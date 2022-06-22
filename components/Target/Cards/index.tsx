import React from 'react';

import styles from './card.module.scss';

function index(title: string, desc: string) {
    return (
        <div className={styles.card}>
            <h3>
                {title}
            </h3>
            <p>
                {desc}
            </p>
        </div>
    );
}

export default index;