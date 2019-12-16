import axios from "./axios";

export async function addApplication(appObj) {
    console.log("In ACTION | addApplication: ", appObj);

    await axios.post(`/application`, { appObj });

    return {
        type: "ADD_APPLICATION",
        applicationData: appObj
    };
}
