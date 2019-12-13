import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
// import Navbar from "./navbar";

import "normalize.css/normalize.css";
import "@blueprintjs/core/dist/blueprint.css";

export default function App() {
    //
    return (
        <>
            <Header />

            <h1>This is the App component</h1>
            <div>
                <BrowserRouter>
                    <h1>This is the BrowserRouter component</h1>
                </BrowserRouter>
            </div>
        </>
    );
}
