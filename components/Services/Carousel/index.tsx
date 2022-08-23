import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { CarouselAnim, TitleAnim, TitleNextPrev } from "./motionCarousel";
import { AllServices } from "../AllServices";
import Pagination from "./Pagination";

import styles from "./carousel.module.scss";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

type Props = {
    paginate: any;
    serviceIndex: number;
    page: number;
    direction: number;
};

export default function Carousel({
    paginate,
    serviceIndex,
    page,
    direction,
}: Props) {
    const [prevSlide, setPrevSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(0);
    const [x2PrevSlide, setX2PrevSlide] = useState(0);
    const [x2NextSlide, setX2NextSlide] = useState(0);

    useEffect(() => {
        if (serviceIndex === 0) {
            setPrevSlide(3);
            setX2PrevSlide(2);
        } else if (serviceIndex === 1) {
            setPrevSlide(serviceIndex - 1);
            setX2PrevSlide(3);
        } else {
            setPrevSlide(serviceIndex - 1);
            setX2PrevSlide(serviceIndex - 2);
        }

        if (serviceIndex === 3) {
            setNextSlide(0);
            setX2NextSlide(1);
        } else if (serviceIndex === 2) {
            setNextSlide(serviceIndex + 1);
            setX2NextSlide(0);
        } else {
            setNextSlide(serviceIndex + 1);
            setX2NextSlide(serviceIndex + 2);
        }
    }, [serviceIndex]);
    
    return (
        <div className={styles.carousel}>
            <div className={styles.pagination}>
                <Pagination
                    currentPage={page}
                    paginate={paginate}
                    idService={AllServices[serviceIndex].id}
                />
            </div>
            <div className={styles.container}>
                <AnimatePresence
                    initial={false}
                    custom={direction}
                    exitBeforeEnter
                >
                    <motion.div
                        key={page}
                        className={styles.slides}
                        custom={direction}
                        variants={CarouselAnim}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    >
                        <div
                            className={`${styles.currentSlide} ${styles.slide}`}
                        >
                            <motion.p
                                custom={direction}
                                variants={TitleAnim}
                                initial="enter"
                                animate="center"
                            >
                                {AllServices[serviceIndex].title}
                            </motion.p>
                            <div
                                className={`${styles.prevX4} ${styles.slide}`}
                            ></div>
                            <div
                                className={`${styles.prevX3} ${styles.slide}`}
                            ></div>
                            <div className={`${styles.prevX2} ${styles.slide}`}>
                                {AllServices[x2PrevSlide].title}
                            </div>
                            <div className={`${styles.prev} ${styles.slide}`}>
                                <motion.p
                                    custom={direction}
                                    variants={TitleNextPrev}
                                    initial="enter"
                                    animate="center"
                                >
                                    {AllServices[prevSlide].title}
                                </motion.p>
                            </div>
                            <div className={`${styles.next} ${styles.slide}`}>
                                <motion.p
                                    custom={direction}
                                    variants={TitleNextPrev}
                                    initial="enter"
                                    animate="center"
                                >
                                    {AllServices[nextSlide].title}
                                </motion.p>
                            </div>
                            <div className={`${styles.nextX2} ${styles.slide}`}>
                                <p>{AllServices[x2NextSlide].title}</p>
                            </div>
                            <div
                                className={`${styles.nextX3} ${styles.slide}`}
                            ></div>
                            <div
                                className={`${styles.nextX4} ${styles.slide}`}
                            ></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
