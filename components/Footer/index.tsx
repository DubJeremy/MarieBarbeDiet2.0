import Link from "next/link";
import React from "react";

import DubJeremyLogo from "../svgs/DubLogo.svg";
import Facebook from "../svgs/facebookLogo.svg";
import Instagram from "../svgs/instagramLogo.svg";
import Linkedin from "../svgs/linkedinLogo.svg";

import styles from "./footer.module.scss";

function Footer() {
    return (
        <div className={styles.footer}>
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
            <div>
                <div>
                    <h3>Marie Barbé Diététicienne Nutritionniste Bordeaux</h3>
                    <p>© Copyright 2021 - Tous droits réservés</p>
                </div>
                <div>
                    <p>Website by Dubois Jérémy</p>
                    <Link
                        href="https://www.linkedin.com/in/jeremy-dubois-dev/"
                        
                    >
                        <div className={styles.dubLinkedIn}><DubJeremyLogo /></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
