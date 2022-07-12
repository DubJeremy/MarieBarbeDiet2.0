import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ChildEating from "../svgs/childEating.svg";
import FoodOnFork from "../svgs/foodOnFork.svg";
import FoodPlate2 from "../svgs/foodPlate2.svg";
import FoodPlate3 from "../svgs/foodPlate2.svg";
import WomanCooking from "../svgs/womanCooking.svg";
import WomanCooking1 from "../svgs/womanCooking1.svg";
import Pregnant from "../svgs/pregnant.svg";
import { AllServices, initialService as services } from "./AllServices";
// import WomanPregnant1 from "../svgs/WomanPregnant1.svg";

import styles from "./services.module.scss";


function Services() {
    const [selectedService, setSelectService] = useState(services[0]);

    return (
        <div id="services" className={styles.services}>
            {/* {CardsContent.map((card, index) => (
                <div key={index} className={styles.cards}>
                    <Card title={card.title} desc={card.desc} />
                </div>
            ))} */}
            <h2>SERVICES</h2>
            <div>
                {services.map((service) => (
                    <motion.h3 key={service.title}
                    className={service === selectedService ? styles.serviceSelected  : ""}
                    onHoverStart={() => setSelectService(service)}>
                        {service.title}
                    </motion.h3>
                ))}
                <AnimatePresence exitBeforeEnter>
                    <motion.div key={selectedService ? (selectedService.title) : ""}>
                        <motion.p className={selectedService.left ? styles.left : styles.right}>
                            {selectedService ? selectedService.desc : ""}
                        </motion.p>
                        <motion.div className={`${selectedService.left ? styles.right : styles.left} ${styles.illustration}`}>
                            {selectedService ? selectedService.img : ""}
                        </motion.div>
                    </motion.div>

                    {/* <h3>Perte de Poids</h3>
                    <h3>Pathologie</h3>
                    <h3>Femme Enceinte/Allaitante</h3>
                    <h3>Enfant/Adolescent</h3> */}
                    {/* <p className={styles.left}>Réequilibrage alimentaire</p>
                    <div className={`${styles.right} ${styles.illustration}`}>
                        <FoodOnFork />
                    </div> */}
                    {/* <p className={styles.right}>
                        Les conseils dont vous avez besoin pour prendre votre
                        santé en main
                    </p>
                    <div className={`${styles.left} ${styles.illuVertical}`}> */}
                        {/* <WomanCooking /> */}
                        {/* <WomanCooking1 />
                    </div> */}
                    {/* <p className={styles.left}>
                        Préparez l&apos;arrivée de votre bébé en toute sérénité
                    </p>
                    <div className={`${styles.right} ${styles.illuVertical}`}>
                        <Pregnant />
                    </div>
                    <p className={styles.right}>
                        Les clés pour une bonne croissance (-16ans)
                    </p>
                    <div className={`${styles.left} ${styles.illuVertical}`}>
                        <ChildEating />
                    </div> */}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Services;
