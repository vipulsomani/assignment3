import React from 'react';
const EmployeeTable = (props) =>{
    return(
        <tr>
        <td> {props.name}</td>
        <td> {props.job}</td>
        <td><button type="button" onClick={props.click}>Remove</button></td>
        </tr>
    )
};
export default EmployeeTable;