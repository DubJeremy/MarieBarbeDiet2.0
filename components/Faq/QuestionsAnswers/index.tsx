import React, { useState } from 'react';

import styles from './questionAnswer.module.scss'

function QuestionsAnswers(props: Faq.QuestionAnswer) {
    const {question, answerF, answerS} = props;
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className={styles.questionAnswer}onClick={() => setShowAnswer(showAnswer => !showAnswer)}>
            <h3>
                {question}
            </h3>
            <div>
               {answerF} 
               {answerS} 
            </div>
        </div>
    );
}

export default QuestionsAnswers;