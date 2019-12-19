import axios from "./axios";

export async function addApplication(appObj) {
    console.log("In ACTION | addApplication: ", appObj);

    await axios.post(`/application`, { appObj });

    return {
        type: "ADD_APPLICATION_INPUT",
        applicationInput: appObj
    };
}

export async function getApplicationsData() {
    console.log("In ACTION | getApplicationsData: ");

    const { data } = await axios.get(`/allapplications`);
    // console.log("ACTION DATA: ", data.rows);

    return {
        type: "GET_APPLICATIONS_DATA",
        allApplicationsData: data.rows
    };
}

export async function getApplicationsList() {
    console.log("In ACTION | getApplicationsList");

    const { data } = await axios.get(`/allpplicationslist`);
    console.log("ACTION DATA: ", data);

    return {
        type: "GET_APPLICATIONS_LIST",
        allApplicationsList: data.rows
    };
}
