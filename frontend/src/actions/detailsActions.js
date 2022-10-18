import {
    FETCH_PATIENT,
    FETCH_COMOBIDITY,
    FETCH_DEPARTMENT,
    FETCH_DIAGNOSIS,
    FETCH_SYMPTOMS,
    FETCH_TESTS,
    FETCH_TEST_RESULTS,
    FETCH_TREATMENT
} from "../constants/detailConstants";

export const patient = (user) => async (dispatch) => {
    dispatch({ type: FETCH_PATIENT, payload: user })
}
export const department = (department) => async (dispatch) => {
    console.log(department)
    dispatch({ type: FETCH_DEPARTMENT, payload: department })
}
export const Symptoms = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: FETCH_SYMPTOMS, payload: data })
}
export const Co_mobidity = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: FETCH_COMOBIDITY, payload: data })
}
export const _tests = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: FETCH_TESTS, payload: data })
}
export const Test_result = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: FETCH_TEST_RESULTS, payload: data })
}
export const _Diagnosis = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: FETCH_DIAGNOSIS, payload: data })
}
export const _Treatment = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: FETCH_TREATMENT, payload: data })
}