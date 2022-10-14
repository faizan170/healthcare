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

export const patient=(user)=>async (dispatch)=>{
    dispatch({type: FETCH_PATIENT, payload: user})
}
export const department = (department)=>async (dispatch) => {
    console.log(department)
    dispatch({type: FETCH_DEPARTMENT,payload: department})
}
export const Symptoms = (data)=>async (dispatch) => {
    console.log(data)
    dispatch({type: FETCH_SYMPTOMS,payload: data})
}