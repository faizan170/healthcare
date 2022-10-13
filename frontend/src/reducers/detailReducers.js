import { FETCH_COMOBIDITY, FETCH_DEPARTMENT, FETCH_DIAGNOSIS, FETCH_PATIENT, FETCH_SYMPTOMS, FETCH_TESTS, FETCH_TEST_RESULTS, FETCH_TREATMENT } from "../constants/detailConstants";

export const detailReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PATIENT:
            return { patient: action.payload };
        // case FETCH_DEPARTMENT:
        //     return { department: action.payload };
        // case FETCH_SYMPTOMS:
        //     return { symptoms: action.payload };
        // case FETCH_COMOBIDITY:
        //     return { comobibity: action.payload };
        // case FETCH_TESTS:
        //     return { tests: action.payload };
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