import React, { useState, useEffect } from "react";
import axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "./actions";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { makeStyles } from "@material-ui/core/styles";

import CountrySelect from "./countryselect";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));

export default function AppDetailsForm() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [jobTitle, setJobTitle] = useState("");
    const [jobDesc, setJobDesc] = useState("");
    const [jobCompany, setJobCompany] = useState("");
    const [jobUrl, setJobUrl] = useState("");
    const [jobCity, setJobCity] = useState("");
    const [jobCountry, setJobCountry] = useState("");
    const [jobContactFirst, setJobContactFirst] = useState("");
    const [jobContactLast, setJobContactLast] = useState("");
    const [jobApplied, setJobApplied] = useState(false);

    // console.log("jobTitle: ", jobTitle);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit App Data");

        const appObj = {
            jobTitle,
            jobDesc,
            jobCompany,
            jobUrl,
            jobCity,
            jobCountry,
            jobContactFirst,
            jobContactLast,
            jobApplied
        };
        console.log("appObj: ", appObj);

        dispatch(addApplication(appObj));
    };

    return (
        <form className={classes.root} noValidate autoComplete="on">
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Job Title"
                    onChange={e => setJobTitle(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="Job Description"
                    onChange={e => setJobDesc(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="Company"
                    onChange={e => setJobCompany(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="Job URL"
                    type="url"
                    onChange={e => setJobUrl(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="City"
                    onChange={e => setJobCity(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="Country"
                    onChange={e => setJobCountry(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="Contact Firstname"
                    onChange={e => setJobContactFirst(e.target.value)}
                />
                <TextField
                    id="standard-required"
                    label="Contact Lastname"
                    onChange={e => setJobContactLast(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            id="standard-required"
                            type="checkbox"
                            onChange={e => setJobApplied(e.target.value)}
                        />
                    }
                    label="Application Sent?"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
}

// <CountrySelect
//     id="standard-required"
//     label="Country"
//     onChange={e => setJobCountry(e.target.value)}
// />
