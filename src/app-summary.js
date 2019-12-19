import React from "react";
import { useDispatch, useSelector } from "react-redux";

// MATERIAL UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import SummaryApp from "./summary-app";
import SummaryCompany from "./summary-company";
import SummaryContact from "./summary-contact";

import { getApplicationsData } from "./actions";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));

export default function AppSummary() {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const currentData = useSelector(state => {
    //     state && state.allApplicationsData;
    //     // state.allApplicationsList;
    // });
    let currentData = dispatch(getApplicationsData());
    console.log("currentData: ", currentData);
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <SummaryApp />
                <Divider variant="middle" />
                <SummaryCompany />
                <Divider variant="middle" />
                <SummaryContact />
            </div>
        </form>
    );
}
