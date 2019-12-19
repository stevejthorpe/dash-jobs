export default function reducer(state = {}, action) {
    console.log(`state started as `, state);

    if (action.type == "ADD_APPLICATION_INPUT") {
        state = {
            ...state,
            applicationInput: action.applicationInput
        };
    }

    if (action.type == "GET_APPLICATIONS_DATA") {
        // console.log("In reducer: ", action.allApplicationsData);
        state = {
            ...state,
            allApplicationsData: action.allApplicationsData
        };
    }

    if (action.type == "GET_APPLICATIONS_LIST") {
        console.log(
            "In reducer GET_APPLICATIONS_LIST: ",
            action.allApplicationsList
        );
        state = {
            ...state,
            allApplicationsList: action.allApplicationsList
        };
    }

    if (action.type == "DELETE_APPLICATION") {
        console.log("In reducer DELETE_APPLICATION: ", action);
        state = {
            ...state,
            allApplicationsList: state.allApplicationsList.filter(appId => {
                return action.app_id != appId.id;
            })
        };
    }
    console.log(`state ended as `, state);

    return state;
}
