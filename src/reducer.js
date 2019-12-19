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
    console.log(`state ended as `, state);

    return state;
}
