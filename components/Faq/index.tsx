import React from 'react';

import { FaqContent  } from './FaqContent';
import QuestionsAnswers  from './QuestionsAnswers';

import styles from './faq.module.scss'

function Faq() {
    return (
        <div className={styles.faq}>
            <h2>Foire aux questions</h2>
            {FaqContent.map((questionAnswer: Faq.QuestionAnswer, index: number) =>(
                <div key={index}>
                    <QuestionsAnswers question={questionAnswer.question} answerF={questionAnswer.answerF} answerS={questionAnswer.answerS} />
                </div>   
            ))}
            <p>
            Pour toute autre questions prenez contact via le formulaire de contact, <a href="mailto:dieteticienne.marie@gmail.com" className={styles.contact}>mail</a> ou téléphone: <span className={styles.mobilePhone}>07.49.64.54.52</span>
            </p>
        </div>
    );
}

export default Faq;