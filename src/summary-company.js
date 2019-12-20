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

export default function SummaryCompany() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <FormLabel component="legend">Company Information</FormLabel>
                <TextField id="company-name" label="Company Name" />
                <TextField id="company-url" label="Website" type="url" />
                <TextField id="company-add" label="Address" />
                <TextField id="company-postcode" label="Postcode" />
                <TextField id="company-city" label="City" />
                <TextField id="company-country" label="Country" />
            </div>
        </form>
    );
}
