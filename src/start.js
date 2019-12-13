import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
// import Logo from "./logo";

import App from "./app";
//Blueprint.js
import "@blueprintjs/core";

let elem;

if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    // elem = <Logo />;
    elem = <App />;
}

// puts the stuff on screen.
ReactDOM.render(elem, document.querySelector("main"));

console.log("In start.js");
