import { LOAD_EMPLOYEES, LOAD_COUNT } from '../constants';

export const employeesReducer = (state = [], action)=> {
	switch(action.type) {
		case LOAD_EMPLOYEES:
			state = action.employees
			break;
	}
  	return state;
};

export const countReducer = (state = 0, action)=> {
	switch(action.type) {
		case LOAD_COUNT:
			state = action.count
			break;
	}
  	return state;
};
