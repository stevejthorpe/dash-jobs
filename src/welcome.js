import React, { useState, useEffect } from "react";

import { Button } from "@blueprintjs/core";

export default function Welcome() {
    return (
        <>
            <h1>This is the Welcome Component</h1>
            <Button
                intent="success"
                text="button content"
                onClick={console.log("Clicked!!!!")}
            />
        </>
    );
}
