import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import {
//     Alignment,
//     Button,
//     Classes,
//     H5,
//     Navbar,
//     NavbarDivider,
//     NavbarGroup,
//     NavbarHeading,
//     Switch
// } from "@blueprintjs/core";
// import {
//     Example,
//     handleBooleanChange,
//     IExampleProps
// } from "@blueprintjs/docs-theme";
import { Navbar } from "@blueprintjs/core";

export default function Navbar() {
    return (
        <nav className="pt-navbar">
            <div className="pt-navbar-group pt-align-left">
                <div className="pt-navbar-heading">NavBar</div>
                <input
                    className="pt-input"
                    placeholder="search..."
                    type="text"
                />
            </div>
            <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-minimal pt-icon-music" to="/">Link</>
            </div>
        </nav>
    );
}

// return (
//     <nav class="bp3-navbar .modifier">
//         <div class="bp3-navbar-group bp3-align-left">
//             <div class="bp3-navbar-heading">dashJobs</div>
//             <input
//                 class="bp3-input"
//                 placeholder="Search files..."
//                 type="text"
//             />
//         </div>
//         <div class="bp3-navbar-group bp3-align-right">
//             <button class="bp3-button bp3-minimal bp3-icon-home">
//                 Home
//             </button>
//             <button class="bp3-button bp3-minimal bp3-icon-document">
//                 Files
//             </button>
//             <span class="bp3-navbar-divider"></span>
//             <button class="bp3-button bp3-minimal bp3-icon-user"></button>
//             <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
//             <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
//         </div>
//     </nav>
// );
