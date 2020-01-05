import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
    getApplicationsList,
    deleteApplication,
    setCurrentAppID
} from "./actions";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    }
}));

export default function AppList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const [dense, setDense] = React.useState(false);

    // const openApplications = useSelector(state => {
    //     console.log("In selector: ", state.allApplicationsList);
    //     return state.allApplicationsList;
    // });

    const openApplications = useSelector(
        state => state && state.allApplicationsList
    );

    useEffect(() => {
        // console.log("Dispatch getApplicationsList");
        // dispatch(getApplicationsList());
        // return;
        if (!openApplications) {
            console.log("Dispatching Open Applications");
            dispatch(getApplicationsList());
            return;
        }
    }, [openApplications]);

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
            <Grid item xs={12} md={12}>
                <Typography variant="h6" className={classes.title}>
                    Open Applications
                </Typography>
                <div className={classes.root}>
                    <List>
                        {openApplications.map((item, i) => (
                            <ListItem key={i}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.company_name} />
                                <ListItemText primary={item.job_title} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit">
                                        <Link to={`/application/` + item.id}>
                                            <EditIcon />
                                        </Link>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() =>
                                            dispatch(deleteApplication(item.id))
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
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
