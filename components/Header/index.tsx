import { useEffect, useRef } from "react";
import { getDocHeight } from "../../styles/utils/docSize.utils";

import LogoMBD from "../svgs/MarieBarbé.svg";
import PhotoMB from "../svgs/fdp.svg";
import BackgroundVege from "../svgs/vegetables.svg";

import styles from "./header.module.scss";

function Header() {
    // const appRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     if (appRef.current) {
    //         appRef.current.style.height = getDocHeight();
    //     }
    // }, []);

    return (
        <div  className={styles.header}>
            <div className={styles.logoTitle}>
                <div className={styles.logo}>
                    <LogoMBD />
                </div>
                <h1>
                    <p>Diététicienne,</p>
                    <p>Nutritionniste.</p>
                </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.photoMB}>
                    <PhotoMB />
                </div>
                <div className={styles.intro}>
                    <h2>Hey, je suis Marie.</h2>
                    <p>
                        Je vous aide à adapter votre alimentation grâce à un
                        programme et un suivi personnalisé. Mon but : Vous
                        permettre d’améliorer votre santé.
                    </p>
                    <div className={styles.plus}>+</div>
                </div>
                {/* <div className={styles.backgroundVege}>
                    <BackgroundVege />
                </div> */}
            </div>
        </div>
    );
}

export default Header;
