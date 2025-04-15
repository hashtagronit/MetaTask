import React,{useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [category, setCategory] = useState('')
    const [taskAssignTo, setTaskAssignTo] = useState('')

    const { authData, setAuthData } = useContext(AuthContext);
    
    const submitHandler = (e) => {
        e.preventDefault()

        console.log("Submit button clicked")

        const newTask={taskTitle,taskDescription,taskDate,category,taskAssignTo,active : false, newTask : true, completed : false, failed: false}
        console.log("Before task creation: ", authData)
        const updatedEmployees = authData.employees.map((employee) => {
            if (taskAssignTo === employee.name) {
                
                employee.tasks.push(newTask)
                employee.taskCount.newTask += 1
            }
            return employee
        })

        console.log("Updated Employees: ", updatedEmployees)

        const updatedAuthData = { ...authData, employees: updatedEmployees }
        setAuthData(updatedAuthData)

        localStorage.setItem('authData', JSON.stringify(updatedAuthData))
    

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setCategory('')
        setTaskAssignTo('')

    }

  return (
    <div className='px-7 py-5 bg-[#1C1C1C] mt-7 rounded'>
    <form 
    onSubmit={(e)=> {submitHandler(e)}} 
    className='flex flex-wrap w-full items-start justify-between'>
        
        <div className='w-1/2'>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={ (e) => { setTaskTitle(e.target.value) }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                type='text' 
                placeholder='Make a UI Design'/>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Date</h3>
                <input 
                value={taskDate}
                onChange={ (e) => { setTaskDate(e.target.value) }}
                className='text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400'  
                type='date' 
                placeholder='dd/mm/yyyy'/>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Assign to</h3>
                <input 
                value={taskAssignTo}
                onChange={ (e) => { setTaskAssignTo(e.target.value) }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  
                type='text' 
                placeholder='Employee Name'></input>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Category</h3>
                <input 
                value={category}
                onChange={ (e) => { setCategory(e.target.value) }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  
                type='text' 
                placeholder='design, dev, etc'></input>
            </div>

        </div>

        <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={taskDescription}
            onChange={ (e) => { setTaskDescription(e.target.value) }}
            className='w-full h-44 text-sm px-4 py-2 rounded outline-none bg-transparent border-[1px] border-gray-300' 
            name='' 
            cols={30} 
            rows={10} 
            id=''></textarea>

            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full font-semibold'>Create Task</button>
        </div>
    </form>
  </div>
  )
}

export default CreateTask
