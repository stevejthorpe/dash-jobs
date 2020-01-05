import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProgress } from "./actions";

// MATERIAL UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));

export default function Progress() {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const { jobTitle, jobCity } = useSelector(state => {
    //     state.allApplicationsList.job_title[0];
    //     state.allApplicationsData.city[0];
    // });

    // console.log("appData: ", jobTitle, jobCity);

    const [state, setState] = useState({
        applied: true,
        app_response: false,
        online_int: false,
        inperson_int: false,
        offer: false,
        offer_declined: false,
        offer_accepted: false
    });

    const {
        applied,
        app_response,
        online_int,
        inperson_int,
        offer,
        offer_declined,
        offer_accepted
    } = state;

    console.log("state:", state);

    const currentAppId = useSelector(state => {
        return state.currentAppId;
    });

    // let currentAppData;

    // useEffect(() => {
    //     if (!currentAppData) {
    //         currentAppData = useSelector(state => {
    //             // console.log("Appid: ", currentAppId);
    //             // console.log("state.allApplicationsData: ", state.allApplicationsData);
    //
    //             return (
    //                 state &&
    //                 state.allApplicationsData.filter(
    //                     data => data.app_id == currentAppId
    //                 )
    //             );
    //         });
    //     }
    // }, [currentAppData]);

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

    console.log("currentAppData: ", currentAppData[0]);

    // console.log("currentAppData: ", currentAppData[0].app_id);
    // console.log("currentAppData: ", app_id);

    console.log("Progress State: ", currentAppId);

    const handleChange = name => event => {
        console.log("name, event : ", name, event.target.checked);
        setState({ ...state, [name]: event.target.checked });
    };

    console.log("State.applied: ", state.applied);

    useEffect(() => {
        dispatch(
            updateProgress({
                currentAppId,
                applied,
                app_response,
                online_int,
                inperson_int,
                offer,
                offer_declined,
                offer_accepted
            })
        );
    }, []);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <FormControl
                    component="fieldset"
                    className={classes.formControl}
                >
                    <FormLabel component="legend">
                        Application Progress
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={applied}
                                    onChange={handleChange("applied")}
                                    value="applied"
                                />
                            }
                            label="Applied"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={app_response}
                                    onChange={handleChange("app_response")}
                                    value="app_response"
                                />
                            }
                            label="Response"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={online_int}
                                    onChange={handleChange("online_int")}
                                    value="online_int"
                                />
                            }
                            label="Online Interview"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={inperson_int}
                                    onChange={handleChange("inperson_int")}
                                    value="inperson_int"
                                />
                            }
                            label="In-person Interview"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={offer}
                                    onChange={handleChange("offer")}
                                    value="Offer"
                                />
                            }
                            label="offer"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={offer_declined}
                                    onChange={handleChange("offer_declined")}
                                    value="offer_declined"
                                />
                            }
                            label="Declined"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={offer_accepted}
                                    onChange={handleChange("offer_accepted")}
                                    value="offer_accepted"
                                />
                            }
                            label="Accepted"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </form>
    );
}
