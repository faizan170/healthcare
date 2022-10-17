import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  comobidityReducer, departmentReducer, detailReducer, diagnosisReducer, patientReducer, symptomsReducer, testsReducer, test_ResultsReducer, treatmentReducer } from './reducers/detailReducers';

const reducer=combineReducers({
    //this will contain our reducers
    details: detailReducer,
    
    
});

const initialState = {
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;