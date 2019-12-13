import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import App from "./app";
// Redux
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import { Provider } from "react-redux";
// Socket.io
import { init } from "./socket";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem;

if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    init(store);
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

// puts the stuff on screen.
ReactDOM.render(elem, document.querySelector("main"));

console.log("In start.js");
