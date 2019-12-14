import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Register from "./registration";
import Login from "./login";

export default function Welcome() {
    return (
        <div className="welcome-contaniner">
            <HashRouter>
                <div>
                    <Route exact path="/" component={Register} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}
