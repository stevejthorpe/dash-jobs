import React from "react";
import { useDispatch, useSelector } from "react-redux";

// MATERIAL UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));

export default function SummaryContact() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <FormLabel component="legend">Contact Information</FormLabel>

                <TextField id="contact-firstname" label="Contact Firstname" />
                <TextField id="contact-lastname" label="Contact Lastname" />
                <TextField
                    id="contact-email"
                    label="Contact Email"
                    type="email"
                />
                <TextField
                    id="contact-tel"
                    label="Contact Telephone"
                    type="tel"
                />
            </div>
        </form>
    );
}
