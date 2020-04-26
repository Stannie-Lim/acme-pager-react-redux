import { LOAD_EMPLOYEES, LOAD_COUNT } from '../constants';

export const _loadEmployees = employees => {
    return {
        type: LOAD_EMPLOYEES,
        employees
    }
};

export const _loadCount = count => {
    return {
        type: LOAD_COUNT,
        count
    }
};