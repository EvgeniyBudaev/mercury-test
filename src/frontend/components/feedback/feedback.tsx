import React from 'react'
import styles from './feedback.module.scss'
import Pictures from "./pictures/pictures";
import FeedbackForm from "./feedbackForm";

const Feedback: React.FC = () => {
    return (
        <div className={styles.feedback}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <FeedbackForm />
                    <Pictures />
                </div>
            </div>
        </div>
    )
}

export default Feedback

