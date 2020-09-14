import React from 'react';
import './Employee.css';
const EmployeeTable = (props) =>{
    return(
        <tr>
        <td> {props.name}</td>
        <td> {props.job}</td>
        <td><button type="button" onClick={props.click}>Delete</button></td>
        </tr>
    )
};
export default EmployeeTable;