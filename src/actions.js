import axios from "./axios";

export async function addApplication(appObj) {
    console.log("In ACTION | addApplication: ", appObj);

    await axios.post(`/application`, { appObj });

    return {
        type: "ADD_APPLICATION_INPUT",
        applicationInput: appObj
    };
}

// export async function getApplicationsData() {
//     console.log("In ACTION | getApplicationsData: ", appObj);
//
//     await axios.post(`/application`, { appObj });
//
//     return {
//         type: "GET_APPLICATIONS_DATA",
//         applicationData: appObj
//     };
// }
