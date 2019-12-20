import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const {
        applied,
        app_response,
        online_int,
        inperson_int,
        offer,
        offer_declined,
        offer_accepted
    } = state;

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
                                    value="offer"
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

// <FormControlLabel
//     control={
//         <Checkbox
//             checked={jason}
//             onChange={handleChange("jason")}
//             value="jason"
//         />
//     }
//     label="Jason Killian"
// />
// <FormControlLabel
//     control={
//         <Checkbox
//             checked={antoine}
//             onChange={handleChange("antoine")}
//             value="antoine"
//         />
//     }
//     label="Antoine Llorca"
// />
// </FormGroup>
// <FormHelperText>Be careful</FormHelperText>

// <Typography
//     variant="h6"
//     component="h3"
//     align="left"
//     gutterBottom
// >
//     Application Progress
// </Typography>
// <TextField id="job-title" label="Job Title" name="job-title" />
// <TextField
//     id="job-description"
//     label="Job Descritpion"
//     name="job-descritpion"
// />
// <TextField id="url" label="Website" type="url" />
// <TextField id="city" label="City" name="job-city" />
