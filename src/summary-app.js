import React from "react";
import { useDispatch, useSelector } from "react-redux";

// MATERIAL UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Divider from "@material-ui/core/Divider";
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

export default function SummaryApp() {
    const classes = useStyles();

    // const { jobTitle, jobCity } = useSelector(state => {
    //     state.allApplicationsList.job_title[0];
    //     state.allApplicationsData.city[0];
    // });

    // console.log("appData: ", jobTitle, jobCity);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <FormLabel component="legend">
                    Application Information
                </FormLabel>

                <TextField id="job-title" label="Job Title" name="job-title" />
                <TextField
                    id="job-description"
                    label="Job Descritpion"
                    name="job-descritpion"
                />
                <TextField id="url" label="Website" type="url" />
                <TextField id="city" label="City" name="job-city" />
            </div>
        </form>
    );
}
