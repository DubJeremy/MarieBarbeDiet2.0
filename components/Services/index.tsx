import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { wrap } from "popmotion";

import Carousel from "./Carousel";
import { Contenair, Left, Right, Img, Desc } from "./motionServices";
import { initialService as services } from "./AllServices";

import styles from "./services.module.scss";
import useMediaQuery from "../../tools/useMediaQuery";

function Services() {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [[page, direction], setPage] = useState([0, 0]);
    const serviceIndex = wrap(0, services.length, page);
    const [targetReached] = useMediaQuery(`(min-width: 1280px)`);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const loading = setTimeout(() => {
            setSelectedService(services[serviceIndex]);
        }, 200);
        return () => clearTimeout(loading);
    }, [serviceIndex]);


    return (
        <div id="services" className={styles.services}>
            <h2>SERVICES</h2>
            {!targetReached ? (
                <>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            className={styles.containerMobile}
                            key={selectedService ? selectedService.title : ""}
                            variants={Contenair}
                            initial="init"
                            animate="start"
                            exit="exit"
                        >
                            <motion.p className={styles.desc} variants={Desc}>
                                {selectedService ? selectedService.desc : ""}
                            </motion.p>
                            <motion.div
                                className={styles.illustration}
                                variants={Img}
                            >
                                {selectedService ? selectedService.img : ""}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    <Carousel
                        paginate={paginate}
                        serviceIndex={serviceIndex}
                        page={page}
                        direction={direction}
                    />
                </>
            ) : (
                <div className={styles.containerDesktop}>
                    {services.map((service) => (
                        <motion.h3
                            key={service.title}
                            className={
                                service === selectedService
                                    ? styles.serviceSelected
                                    : ""
                            }
                            onHoverStart={() => setSelectedService(service)}
                            onClick={() => setSelectedService(service)}
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
                                variants={selectedService.left ? Right : Left}
                            >
                                {selectedService ? selectedService.img : ""}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

export default Services;
