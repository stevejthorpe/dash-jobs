import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import NetworkFrame from "./networkframe";
import User from "./user";
import AppProfile from "./app-profile";
import Hierarchy from "./hierarchy";

import NavBar from "./navbar";
// import Header from "./header";
// import Navbar from "./navbar";

export default function App() {
    //
    return (
        <>
            <NavBar />

            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <>
                            <User />
                        </>
                    )}
                />
                <Route exact path="/application/:id" component={AppProfile} />
                <Route exact path="/test" component={Hierarchy} />
            </BrowserRouter>
        </>
    );
}
// <AppProfile />
// <NetworkFrame />
// <User />
