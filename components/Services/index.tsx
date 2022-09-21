import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
    const [targetXS] = useMediaQuery(`(max-width: 320px)`);
    const [targetS] = useMediaQuery(`(min-width: 320px)`);
    const [targetM] = useMediaQuery(`(min-width: 768px)`);
    const [targetL] = useMediaQuery(`(min-width: 1280px)`);

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
            {!targetL ? (
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
                                <>
                                    {selectedService ? (
                                        <Image
                                            src={
                                                targetXS
                                                    ? selectedService.imgXS
                                                    : targetS
                                                    ? selectedService.imgS
                                                    : targetM
                                                    ? selectedService.imgM
                                                    : selectedService.imgL
                                            }
                                            alt={selectedService.alt}
                                            layout="responsive"
                                            objectFit="cover"
                                            className={styles.image}
                                        />
                                    ) : null}
                                </>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    <div className={styles.carousel}>
                        <Carousel
                            paginate={paginate}
                            serviceIndex={serviceIndex}
                            page={page}
                            direction={direction}
                        />
                    </div>
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
                                {selectedService.desc}
                            </motion.p>
                            <motion.div
                                className={`${
                                    selectedService.left
                                        ? styles.right
                                        : styles.left
                                } ${styles.illustration}`}
                                variants={selectedService.left ? Right : Left}
                            >
                                <Image
                                    src={selectedService.imgM}
                                    alt={selectedService.alt}
                                    objectFit="cover"
                                    className={styles.image}
                                />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

export default Services;
