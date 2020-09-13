import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from './EmployeeForm';

class EmployeeData extends Component {
    state = {
        employee: [{
            name: 'Vipul ',
            job: 'Student'
        }]
    }
    removeEmployee = (event, index) => {
        const emp = this.state.employee.slice()
        emp.splice(index,1)
        this.setState({ employee:emp})
    }
    addEmp = (newemp, newjob) => {
        const emp = this.state.employee.slice()
        emp.push({ name:newemp, job:newjob })
        this.setState({ employee: emp })
    }
    render() 
    {
        let employee=(
            this.state.employee.map((employees,index)=>{
                return <EmployeeTable 
                name={employees.name}
                 job={employees.job}
                click={(event)=> this.removeEmployee(event,index)}/>
            })
        )
        return (
        
                <div>
                    <EmployeeForm addEmp={this.addEmp}>
                    </EmployeeForm>
                    <h4> Employee Table</h4>
                    <table>
                        <tr>
                            <th id="name" scope="col">Name</th>
                            <th id="Job" scope="col">Job</th>
                            <th id="Remove" scope="col">Remove</th>
                        </tr>
                        {employee}
                    </table>
                </div>

        )

    }
}
export default EmployeeData;

