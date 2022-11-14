import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Facebook from "../svgs/facebookBlack.svg";
import Instagram from "../svgs/instagramBlack.svg";
import Linkedin from "../svgs/linkedinBlack.svg";
import PhotoMB from "../../public/images/fdp.jpeg";
import LogoMB from "../../public/images/logo.png";

import styles from "./header.module.scss";
import useMediaQuery from "../../tools/useMediaQuery";

function Header() {
    const [targetReached] = useMediaQuery(`(min-width: 1024px)`);
    const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);

    const orientationCheck = () => {
        if (typeof window !== "undefined") {
            if (window.innerHeight < window.innerWidth) {
                setIsInLandscape(true);
            } else {
                setIsInLandscape(false);
            }
        }
    };

    return (
        <div className={styles.header}>
            <div className={styles.logoTitle}>
                <div className={styles.logo}>
                    <Image
                        src={LogoMB}
                        alt="Logo de Marie Barbé"
                        layout="responsive"
                        objectFit="contain"
                    />
                </div>
                <h1>
                    <p>Diététicienne,</p>
                    <p>Nutritionniste.</p>
                </h1>
                {/* {targetReached && isInLandscape ? ( */}
                <div className={styles.network}>
                    <div className={styles.facebook}>
                        <Facebook />
                    </div>
                    <div className={styles.instagram}>
                        <Instagram />
                    </div>
                    <div className={styles.linkedin}>
                        <Linkedin />
                    </div>
                </div>
                {/* ) : null} */}
            </div>
            <div className={styles.content}>
                <div className={styles.photoMB}>
                    <div className={styles.img}>
                        <Image
                            src={PhotoMB}
                            alt="Photo de Marie Barbé"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className={styles.intro}>
                    <h2>Hey, je suis Marie.</h2>
                    <p>
                        Je vous aide à adapter votre alimentation grâce à un
                        programme et un suivi personnalisé. Mon but : Vous
                        permettre d’améliorer votre santé.
                    </p>
                    <Link href="#summary">
                        <div className={styles.plus}>+</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
