import {
    FETCH_SUSPECTED_DISEASES,
    FETCH_DEPARTMENT,
    FETCH_DIAGNOSIS,
    FETCH_PATIENT,
    FETCH_SYMPTOMS,
    FETCH_TESTS,
    FETCH_TEST_RESULTS,
    FETCH_TREATMENT,
    CHANGE_USECASE
} from "../constants/detailConstants";

const initialState = {
    use_case : "general",
    patient: {},
    department: {},
    symptoms: {values: [], comments: ""},
    suspected_diseases: {values: [], comments: ""},
    tests: {values: [], comments: ""},
    test_results: {values: [], comments: ""},
    diagnosis: {values: [], comments: ""},
    treatment: {values: [], comments: ""},
}


export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PATIENT:
            return { ...state, patient: action.payload };
        case FETCH_DEPARTMENT:
            return { ...state, department: action.payload };
        case FETCH_SYMPTOMS:
            console.log(action.payload)
            if (action.payload.value) {
                return { ...state, symptoms: { ...state.symptoms, values: action.payload.value } };
            } else {
                return { ...state, symptoms: { ...state.symptoms, comments: action.payload.comments } };
            }
        case FETCH_SUSPECTED_DISEASES:
            if (action.payload.value) {
                return { ...state, suspected_diseases: { ...state.suspected_diseases, values: action.payload.value } };
            } else {
                return { ...state, suspected_diseases: { ...state.suspected_diseases, comments: action.payload.comments } };
            }
        case FETCH_TESTS:
            if (action.payload.value) {
                return { ...state, tests: { ...state.tests, values: action.payload.value } };
            } else {
                return { ...state, tests: { ...state.tests, comments: action.payload.comments } };
            }
        case FETCH_TEST_RESULTS:
            return { ...state, test_results: action.payload };
        case FETCH_DIAGNOSIS:
            return { ...state, diagnosis: action.payload };
        case FETCH_TREATMENT:
            if (action.payload.value) {
                return { ...state, treatment: { ...state.treatment, values: action.payload.value } };
            } else {
                return { ...state, treatment: { ...state.treatment, comments: action.payload.comments } };
            }
        case CHANGE_USECASE:
            return { ...state, use_case: action.payload };

        default:
            return state;
    }
}
