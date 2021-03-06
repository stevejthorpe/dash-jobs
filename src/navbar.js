import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "./drawer";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function NavBar() {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggle = () => {
        console.log("btn clicked");
        setOpenDrawer(!openDrawer);
    };

    const logout = () => {
        window.location.href = "/logout";
    };

    const home = () => {
        window.location.href = "/";
    };

    const test = () => {
        window.location.href = "/test";
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon onClick={toggle} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        dash Jobs
                    </Typography>
                    <Button color="inherit" onClick={test}>
                        Test
                    </Button>
                    <Button color="inherit" onClick={home}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={logout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            {openDrawer && <Drawer toggleDrawer={("left", true)} />}
        </div>
    );
}
