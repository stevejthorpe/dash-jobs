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
        state = {
            ...state,
            allApplicationsData: action.allApplicationsData
        };
    }
}
