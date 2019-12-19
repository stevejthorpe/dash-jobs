import React, { useState, useEffect } from "react";
import axios from "./axios";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getApplicationsList } from "./actions";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function AppList() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Dispatch getApplicationsList");
        if (!openApplications) {
            console.log("Dispatching Open Applications");
            dispatch(getApplicationsList());
            return;
        }
    }, []);

    // const openApplications = useSelector(state => {
    //     console.log("In selector: ", state.allApplicationsList);
    //     return state.allApplicationsList;
    // });

    const openApplications = useSelector(
        state => state && state.allApplicationsList
    );

    // if (openApplications.length) {
    //     setYes(true);
    // }

    console.log("openApplications: ", openApplications);

    // console.log(
    //     openApplications.map(item => {
    //         return item.id;
    //     })
    // );

    ////////////
    // RENDER //
    ////////////

    // return (
    //     <>
    //         <div>
    //             {openApplications &&
    //                 openApplications.map(item => {
    //                     <div key={item.id}>{item.job_title}</div>;
    //                 })}
    //         </div>
    //     </>
    // );

    if (!openApplications) {
        return (
            <div className={classes.root}>
                <CircularProgress color="secondary" size="200" />
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <List>
                    {openApplications.map((item, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={item.job_title} />
                            <ListItemText primary={item.company_name} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

// <div>
//     <h1>Hello</h1>
//     {openApplications.map((item, i) => (
//         <div key={i}>{item.job_title}</div>
//     ))}
// </div>

// <div key={i}>{item.job_title}</div>
// <ListItem button>
//     <ListItemText primary="Trash" />
// </ListItem>;
