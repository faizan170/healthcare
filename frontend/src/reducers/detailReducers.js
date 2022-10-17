import { FETCH_COMOBIDITY, FETCH_DEPARTMENT, FETCH_DIAGNOSIS, FETCH_PATIENT, FETCH_SYMPTOMS, FETCH_TESTS, FETCH_TEST_RESULTS, FETCH_TREATMENT } from "../constants/detailConstants";

export const detailReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PATIENT:
            return { patient: action.payload };
        case FETCH_DEPARTMENT:
            return { ...state,department: action.payload };
        case FETCH_SYMPTOMS:
            //console.log(state)
            return { ...state,symptoms: action.payload };
        case FETCH_COMOBIDITY:
            return { ...state,comobibity: action.payload };
        case FETCH_TESTS:
            return { ...state,tests: action.payload };
        // case FETCH_TEST_RESULTS:
        //     return { test_results: action.payload };
        // case FETCH_DIAGNOSIS:
        //     return { diagnosis: action.payload };
        // case FETCH_TREATMENT:
        //     return { treatment: action.payload };

        default:
            return state;
    }
}
// export const departmentReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_DEPARTMENT:
//             return { department: action.payload };

//         default:
//             return state;
//     }
// }
// export const symptomsReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_SYMPTOMS:
//             return { symptoms: action.payload };

//         default:
//             return state;
//     }
// }
// export const comobidityReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_COMOBIDITY:
//             return { department: action.payload };

//         default:
//             return state;
//     }
// }
// export const testsReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_TESTS:
//             return { department: action.payload };

//         default:
//             return state;
//     }
// }
// export const test_ResultsReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_TEST_RESULTS:
//             return { department: action.payload };

//         default:
//             return state;
//     }
// }
// export const diagnosisReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_DIAGNOSIS:
//             return { department: action.payload };

//         default:
//             return state;
//     }
// }
// export const treatmentReducer = (state = {}, action) => {
//     switch (action.type) {

//         case FETCH_TREATMENT:
//             return { department: action.payload };

//         default:
//             return state;
//     }
// }