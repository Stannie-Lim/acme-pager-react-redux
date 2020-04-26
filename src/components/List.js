import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//thunks
import { loadEmployees } from '../store/store';

//components 
import Employee from './cards/Employee';

const List = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async() => {
            await dispatch(loadEmployees(match.params.num))
        }
        getData();
    }, [match.params.num]);
    
    const employees = useSelector(state => state.employees);
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Email</th>
                    <th>Title</th>
                </tr>
            </thead>
            { employees.map(employee => <Employee key={ employee.id } employee={ employee } /> ) }
        </table>
    )
}

export default List;