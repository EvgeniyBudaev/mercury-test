import React from 'react'
import {} from '@material-ui/core'
import Button from "../button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.main
        }
    }
}))

const ActionButton = (props) => {
    const {color, children, onClick} = props
    const classes = useStyles()

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ActionButton