import React, {useState} from 'react'
import {connect} from 'react-redux'
import styles from './feedbackForm.module.scss'
import useForm from "../../../hooks/use-form"
import {addFeedback} from "../../../redux/actions/action";
import { makeStyles } from '@material-ui/core/styles';
import Button from "../../controls/button";
import Popup from "../../ui/popup";
import Controls from "../../controls/controls";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const FeedbackForm = (props) => {
    console.log('[FeedbackForm][props]', props)
    const INITIAL_VALUES = {name: '', lastname: '', phone: ''}
    const {onSubmit} = props

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('name' in fieldValues) {
            temp.name = fieldValues.name ? "" : "This field is required"
        }
        if('lastname' in fieldValues) {
            temp.lastname = fieldValues.lastname ? "" : "This field is required"
        }
        if('phone' in fieldValues) {
            temp.phone = fieldValues.phone.length > 10 ? "" : "Minimum 11 numbers required"
        }
        setErrors({...temp})

        if(fieldValues === values) {
            return Object.values(temp).every(x => x === '')
        }
    }

    const {values, setValues, errors, setErrors, handleInputChange, resetForm} = useForm(INITIAL_VALUES, true, validate)
    const [openPopup, setOpenPopup] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            console.log('OK')
            onSubmit(values)
            resetForm()
            setOpenPopup(true)
        }
    }

    const classes = useStyles();

    return (
        <div className={styles.feedbackForm}>
            <h2 className={styles.title}>HEADER</h2>
            <div className={styles.form}>
                <form className={classes.root} noValidate autoComplete="off" action="POST" onSubmit={handleSubmit}>
                    <Controls.Input name="name" label="Name" value={values.name} onChange={handleInputChange} error={errors.name} />
                    <Controls.Input name="lastname" label="Last Name" value={values.lastname} onChange={handleInputChange} error={errors.lastname} />
                    <Controls.Input name="phone" label="Phone" value={values.phone} onChange={handleInputChange} error={errors.phone} />
                    <Button type="submit" text="Submit" />
                </form>
            </div>
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Поздравляю!" />
            {/*<button onClick={() => setOpenPopup(true)}>Popup</button>*/}
        </div>
    )
}


export default connect(null, (dispatch, props) => ({
    onSubmit: (feedback) => dispatch(addFeedback(feedback)),
}))(FeedbackForm)