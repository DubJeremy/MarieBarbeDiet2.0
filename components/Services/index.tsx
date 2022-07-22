import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Contenair, Left, Right } from "./motionServices";
import { initialService as services } from "./AllServices";

import styles from "./services.module.scss";

function Services() {
    const [selectedService, setSelectService] = useState(services[0]);

    return (
        <div id="services" className={styles.services}>
            <h2>SERVICES</h2>
            <div>
                {services.map((service) => (
                    <motion.h3
                        key={service.title}
                        className={
                            service === selectedService
                                ? styles.serviceSelected
                                : ""
                        }
                        onHoverStart={() => setSelectService(service)}
                    >
                        {service.title}
                    </motion.h3>
                ))}
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={selectedService ? selectedService.title : ""}
                        variants={Contenair}
                        initial="init"
                        animate="start"
                        exit="exit"
                    >
                        <motion.p
                            className={
                                selectedService.left
                                    ? styles.left
                                    : styles.right
                            }
                            variants={selectedService.left ? Left : Right}
                        >
                            {selectedService ? selectedService.desc : ""}
                        </motion.p>
                        <motion.div
                            className={`${
                                selectedService.left
                                    ? styles.right
                                    : styles.left
                            } ${styles.illustration}`}
                            variants={selectedService.left ? Right : Left  }
                        >
                            {selectedService ? selectedService.img : ""}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Services;
