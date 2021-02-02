import React from 'react'
import {Dialog, DialogTitle, DialogContent, makeStyles} from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import Controls from "../../controls/controls";

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

const Popup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props
    const classes = useStyles()

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{display: 'flex'}}>
                    <Typography variant="h2" component="div" style={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    <Controls.Button
                        color="secondary"
                        text="X"
                        onClick={() => setOpenPopup(false)}
                    >
                    </Controls.Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup