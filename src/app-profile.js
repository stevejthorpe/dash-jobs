import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import NetworkFrame from "./networkframe";

import { useDispatch, useSelector } from "react-redux";
import AppSummary from "./app-summary";
import AppProgress from "./app-progress";
import { setCurrentAppID } from "./actions";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

export default function AppProfile(params) {
    const classes = useStyles();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("In Dispatch");
    //     if ()
    // })

    console.log("Patams.match: ", params.match.params.id);

    useEffect(() => {
        dispatch(setCurrentAppID(params.match.params.id));
    }, [params.match.params.id]);

    const currentAppId = useSelector(state => {
        return state.currentAppId;
    });
    const currentAppData = useSelector(state => {
        // console.log("Appid: ", currentAppId);
        // console.log("state.allApplicationsData: ", state.allApplicationsData);

        return (
            state &&
            state.allApplicationsData.filter(
                data => data.app_id == currentAppId
            )
        );
    });

    console.log("profile info", currentAppData[0]);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <AppSummary />
                        <Button>Save</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <AppProgress />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
