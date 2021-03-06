import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppDetailsForm from "./app-details";
import NetworkFrame from "./networkframe";
import AppList from "./app-list";
import Hierarchy from "./hierarchy";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        alignContent: "center"
    }
}));

export default function User() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>API</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>API</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>API</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Glassdoor API</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6">Application Graph</Typography>
                        <Hierarchy />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6">Add an application</Typography>
                        <AppDetailsForm />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6"></Typography>
                        <AppList />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Global Notes List</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
