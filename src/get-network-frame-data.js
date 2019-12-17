import React, { useEffect } from "react";
import axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationsData } from "./actions";

export default function getNetworkFrameData() {
    console.log("In COMP getApplicationsData");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApplicationsData());
    }, []);

    return console.log("data");
}
