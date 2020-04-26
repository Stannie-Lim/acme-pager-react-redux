import React from 'react';

const Employee = ({ employee }) => {
    return (
        <tbody>
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.email }</td>
                <td>{ employee.title }</td>
            </tr>
        </tbody>
    );
};

export default Employee;