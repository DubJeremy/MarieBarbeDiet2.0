import { motion } from "framer-motion";

import Border from "../svgs/borderFooter.svg";
import LightReflection from "../svgs/lightReflection2.svg";

import styles from "./contact.module.scss";

function Contact() {
    return (
        <div id="contact" className={styles.contact}>
                <h2>CONTACT</h2>
            <div className={styles.card}>
            <div className={styles.border}> </div>
                <div className={styles.lightReflection}>
                    <LightReflection />
                </div>
                <div className={styles.contactLink}>
                    <div className={styles.mobilePhone}>
                        <div className={styles.icon}>☎</div>
                        <div className={styles.txt}>07 49 64 54 52</div>
                    </div>
                    <div className={styles.mail}>
                        <div className={styles.icon}>@</div>
                        <a
                            className={styles.txt}
                            href="mailto:dieteticienne.marie@gmail.com"
                        >
                            dieteticienne.marie@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.borderFooter}> 
                <Border />
            </div>
        </div>
    );
}

export default Contact;
