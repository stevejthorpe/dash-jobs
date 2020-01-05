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
    console.log("----ACTION DATA: ", data.rows);

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

export async function deleteApplication(app_id) {
    console.log("In ACTION | deleteApplication: ", app_id);

    const { data } = await axios.post(`/delete-application/` + app_id);
    console.log("ACTION DATA: ", data);

    return {
        type: "DELETE_APPLICATION",
        app_id
    };
}

export async function setCurrentAppID(app_id) {
    console.log("ACTION SET CURRENT APP ID: ", app_id);
    return {
        type: "SET_CURRENT_APPID",
        currentAppId: app_id
    };
}

export async function updateProgress(projectObj) {
    console.log("In ACTION | progressUpdate: ", projectObj);

    await axios.post("/progress-update", projectObj);

    return {
        type: "PROGRESS_UPDATE"
        // progressObj
    };
}
