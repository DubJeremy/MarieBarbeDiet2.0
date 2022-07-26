import React, { useState } from "react";

import Flower from "../svgs/flower.svg";
import { initialQuestion as questions } from "./FaqContent";

import styles from "./faq.module.scss";

function Faq() {
    const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
    const [isToggled, setToggle] = useState(false);

    const openOptions = () => {
        setToggle(!isToggled);
    };

    return (
        <div className={styles.faq}>
            <h2>Foire aux Questions</h2>
            <div>
                <div className={styles.questions}>
                    {questions.map((question) => (
                        <h3
                            key={question.question}
                            className={
                                question === selectedQuestion
                                    ? styles.nameTeamquestionLargeScreenSelected
                                    : styles.nameTeamquestionLargeScreen
                            }
                            onClick={() => setSelectedQuestion(question)}
                        >
                            {question.question}
                        </h3>
                    ))}
                </div>
                <div className={styles.answer}>
                    <div className={styles.flower}>
                        <Flower />
                    </div>
                    <h2>FAQ</h2>
                    <div className={styles.answerTxt}>
                        <p>
                            {selectedQuestion ? selectedQuestion.answerF : ""}
                        </p>
                        {/* <p>
                            {selectedQuestion && selectedQuestion.answerS
                                ? selectedQuestion.answerS
                                : ""}
                        </p> */}
                    </div>
                </div>
            </div>

            <div></div>

            {/* <p>
                Pour toute autre questions prenez contact via le formulaire de
                contact,{" "}
                <a
                    href="mailto:dieteticienne.marie@gmail.com"
                    className={styles.contact}
                >
                    mail
                </a>{" "}
                ou téléphone:{" "}
                <span className={styles.mobilePhone}> 07.49.64.54.52</span>
            </p> */}
        </div>
    );
}

export default Faq;
