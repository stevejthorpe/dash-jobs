import React, { useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

// import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/stevejthorpe">
                Steve Thorpe
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // async submit(e) {
    //     e.preventDefault();
    //     try {
    //         const { data } = axios.post("/login", {
    //             email: this.state.email,
    //             password: this.state.password
    //         });
    //         console.log("This: ", this.state);
    //
    //         data ? location.replace("/") : this.setState({ error: true });
    //     } catch (err) {
    //         console.log("Login error: ", err);
    //         this.setState({
    //             error: true
    //         });
    //     }
    // }
    const submit = e => {
        e.preventDefault();
        // console.log("This: ", this.state);
        // console.log(this.state.email);
        // console.log(this.email);
        // console.log(this.state.password);
        // console.log(this.password);

        axios
            .post("/login", {
                email: email,
                password: password
            })
            .then(({ data }) => {
                console.log("In POST /login");
                console.log("POST /login data: ", data);
                if (data.success) {
                    console.log("login worked | redirect to /");
                    location.replace("/"); // Replace history, cant go back.
                } else {
                    console.log("Error in login | POST/login");
                    // this.setState({
                    //     error: true
                    // });
                }
            })
            .catch(err => {
                console.log("Error in POST / login: ", err);
                // this.setState = {
                //     error: true
                // };
            });
    };
    // handleChange(inputElement) {
    //     this.setState({
    //         [inputElement.name]: inputElement.value
    //     });
    // }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={e => submit(e)}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
