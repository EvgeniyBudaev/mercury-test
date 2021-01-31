import React from 'react'
import {connect} from 'react-redux'
import styles from './feedbackForm.module.scss'
import useForm from "../../../hooks/use-form"
import {addFeedback} from "../../../redux/actions/action";

const INITIAL_VALUES = {name: '', text: '', phone: ''}

const FeedbackForm = (props) => {
    console.log('[FeedbackForm][props]', props)
    const {onSubmit} = props
    const {values, handlers, reset} = useForm(INITIAL_VALUES)

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(values)
        reset()
    }

    return (
        <div className={styles.feedbackForm}>
            <h2 className={styles.title}>HEADER</h2>
            <div className={styles.form}>
                <form action="POST" onSubmit={handleSubmit}>
                    <input
                        placeholder="Name"
                        className={styles.message}
                        {...handlers.name}
                    />
                    <input
                        placeholder="Last Name"
                        className={styles.message}
                        {...handlers.text}
                    />
                    <input
                        placeholder="Phone"
                        className={styles.message}
                        {...handlers.phone}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default connect(null, (dispatch, props) => ({
    onSubmit: (feedback) => dispatch(addFeedback(feedback)),
}))(FeedbackForm)