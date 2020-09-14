import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from './EmployeeForm';
import './Employee.css';

class EmployeeData extends Component {
    state = {
        employee: [{
            name: '',
            job:''
        
        }]
    }
    addEmp = (newemp, newjob) => {
        const emp = this.state.employee.slice()
        emp.push({ name:newemp, job:newjob })
        this.setState({ employee: emp })
    }
    removeEmp = (event, index) => {
        const emp = this.state.employee.slice()
        emp.splice(index,1)
        this.setState({ employee:emp})
    }
    render() 
    {
     
        let employee=(
            this.state.employee.map((employees,index)=>{
                return <EmployeeTable 
                name={employees.name}
                 job={employees.job}
                click={(event)=> this.removeEmp(event,index)}/>
            })
        )
        return (
        
                <div className="App">
                <table>
                <tr>
                    <th id="name" scope="col">Name</th>
                    <th id="Job" scope="col">Job</th>
                    <th id="Remove" scope="col">Remove</th>
                </tr>
                {employee}
            </table>
                <EmployeeForm addEmp={this.addEmp}>
                    </EmployeeForm>

                </div>

        )

    }
}
export default EmployeeData;

