import React, {useState} from 'react';


const EmployeeForm = props => {
    let[empName,empChange] = useState({name:''});
    let[empJob,jobChange] = useState({job:''});
    
    const addEmployee= ()=>{
        props.addEmp(empName.name,empJob.job);
        console.log(empName.name)
        empName.name=''
        empJob.job=''
    }
    return(
        <div>
        <form>
            <h2>Add New Employee</h2>
            <label>Name</label>
            <input type='text' id= "name" 
            value ={empName.name} 
            onChange={event =>{
                empChange(event.target.value);
            }}
            placeholder ='Enter Name'/>
            <label>Job</label>
            <input type='text' id='job'
            value={empJob.job}
            onChange={event =>{
                jobChange(event.target.value);
            }}
            placeholder = 'Enter Job'/>
            <button type="button" onClick={addEmployee}>Add </button>
        </form>
        </div>
    )
};
export default EmployeeForm;