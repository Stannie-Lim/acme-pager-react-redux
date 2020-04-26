import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import {createLogger} from 'redux-logger';


//reducers 
import { employeesReducer, countReducer } from './reducers/employees';

//actions 
import { _loadEmployees, _loadCount } from './actions/employees';

const loadEmployeesCount = () => {
    return async dispatch => {
        const employees = (await axios.get(`/api/employees`)).data;
        dispatch(_loadCount(Math.ceil(employees.count / employees.rows.length)));
    };
};

const loadEmployees = (pageNum = 0) => {
    return async dispatch => {
        const employees = (await axios.get(`/api/employees/${pageNum}`)).data;
        dispatch(_loadEmployees(employees.rows));
    };
};

const reducer = combineReducers({
    employees: employeesReducer,
    pages: countReducer
});

const store = createStore(reducer, applyMiddleware(
	thunks,
	createLogger({collapsed: true}),
));

export default store;

export {
    loadEmployeesCount,
    loadEmployees
};
