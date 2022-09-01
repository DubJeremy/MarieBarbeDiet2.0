import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AnswerAnim, Container, TxtAnim } from "./motionFaq";
import Flower from "../svgs/flower.svg";
import { initialQuestion as questions } from "./FaqContent";

import styles from "./faq.module.scss";
import useMediaQuery from "../../tools/useMediaQuery";

function Faq() {
    const [targetReached] = useMediaQuery(`(min-width: 992px)`);
    const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
    const [isToggled, setToggle] = useState(false);

    const openOptions = () => {
        setToggle(!isToggled);
    };

    return (
        <>
            {targetReached ? (
                <div id="faq" className={styles.faq}>
                    <h2 className={styles.title}>Foire aux Questions</h2>
                    <div>
                        <div className={styles.questions}>
                            {questions.map((question) => (
                                <h3
                                    key={question.question}
                                    className={
                                        question === selectedQuestion
                                            ? styles.questionSelected
                                            : styles.questionNotSelected
                                    }
                                    onClick={() =>
                                        setSelectedQuestion(question)
                                    }
                                >
                                    {question.question}
                                </h3>
                            ))}
                        </div>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                key={
                                    selectedQuestion
                                        ? selectedQuestion.question
                                        : ""
                                }
                                className={styles.answer}
                                variants={Container}
                                initial="init"
                                animate="start"
                                exit="end"
                            >
                                <div className={styles.flower}>
                                    <Flower />
                                </div>
                                <h2>FAQ</h2>
                                <motion.div
                                    className={styles.answerTxt}
                                    variants={AnswerAnim}
                                >
                                    <motion.p variants={TxtAnim}>
                                        {selectedQuestion
                                            ? selectedQuestion.answer
                                            : ""}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            ) : (
                <div id="faq" className={styles.faqMobile}>
                    <h2>FOIRE AUX QUESTIONS</h2>
                    <div className={styles.container}>
                        {questions.map((question) => (
                            <>
                                <div
                                    key={question.question}
                                    className={styles.question}
                                >
                                    {question.question}
                                </div>
                                <div className={styles.answer}>
                                    {question.answer}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Faq;
