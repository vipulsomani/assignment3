import React, { useState } from 'react';


function EmployeeForm(props) {
    let [empName, empChange] = useState({ name: '' });
    let [empJob, jobChange] = useState({ job: '' });

    const changeNameHandler=(event)=>{
       let newname=event.target.value
    empChange( {name:newname} )
    }
    const changeJobHandler=(event)=>{
        console.log('inside job')
   jobChange({ job:event.target.value })
    }
    
    const addEmployee = () => {
        props.addEmp(empName.name, empJob.job)
        console.log(empName.name)
        empName.name = '';
        empJob.job = '';
    }
    return (
        <div>
            <form>
                <h2>Add New Employee</h2>
                <label>Name</label>
                <input type='text' id="name"
                    value={empName.name}
                    onChange={changeNameHandler}
                    placeholder='Enter Name' />
                <label>Job</label>
                <input type='text' id='job'
                    value={empJob.job}
                    onChange={changeJobHandler}
                    placeholder='Enter Job' />
                <button type="button" onClick={addEmployee}>Add </button>
            </form>
        </div>
    )
};
export default EmployeeForm;