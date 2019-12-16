export default function reducer(state = {}, action) {
    console.log(`state started as `, state);

    if (action.type == "ADD_APPLICATION") {
        state = {
            ...state,
            applicationData: action.applicationData
        };
    }
    console.log(`state started as `, state);
}
