import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const {authData}= useContext(AuthContext)
    
  return (
    <div className='bg-[#1C1C1C] px-7 py-5 mt-5 rounded  h-64'>
        <div  className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h3 className='w-1/5 '>Employee Name</h3>
            <h3 className='w-1/5 '>Active Task</h3>
            <h3 className='w-1/5 '>Completed Task</h3>
            <h3 className='w-1/5 '>Failed Task</h3>
        </div>

        <div id='AllTask' className='h-[80%] overflow-auto'>
       {authData.employees.map((elem,idx)=>{
        return(

        <div key={idx} className=' border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between  rounded'>
            <h5 className='w-1/5 text-white'>{elem.name}</h5>
            <h5 className='w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-white'>{elem.taskCount.completed}</h5>
            
            <h5 className='w-1/5 text-red-400'>{elem.taskCount.failed}</h5>
        </div>
        

       )})}
       </div>
        
      
    </div>
  )
}

export default AllTask
