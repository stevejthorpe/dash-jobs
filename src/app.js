import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import NetworkFrame from "./networkframe";

import NavBar from "./navbar";
// import Header from "./header";
// import Navbar from "./navbar";

export default function App() {
    //
    return (
        <>
            <NavBar />
            <NetworkFrame />
            <BrowserRouter>
                <h1>This is the BrowserRouter component</h1>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </BrowserRouter>
        </>
    );
}
