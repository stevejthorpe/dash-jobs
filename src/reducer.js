export default function reducer(state = {}, action) {
    console.log(`state started as `, state);

    if (action.type == "ADD_APPLICATION_INPUT") {
        state = {
            ...state,
            applicationInput: action.applicationInput
        };
    }
    console.log(`state ended as `, state);

    if (action.type == "GET_APPLICATIONS_DATA") {
        // console.log("In reducer: ", action.allApplicationsData);
        state = {
            ...state,
            allApplicationsData: action.allApplicationsData
        };
    }
    console.log(`state ended as `, state);

    return state;
}
