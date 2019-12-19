import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NetworkFrame from "./networkframe";
import { useDispatch, useSelector } from "react-redux";

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

export default function AppProfile() {
    const classes = useStyles();

    // useEffect(() => {
    //     console.log("In Dispatch");
    //     if ()
    // })

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        NAME application profile
                    </Paper>
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
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Notes List</Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Network Frame
                        <NetworkFrame />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Application Summary</Paper>
                    <Button>Edit Job Profile </Button>
                </Grid>
            </Grid>
        </div>
    );
}
