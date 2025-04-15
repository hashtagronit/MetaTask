import React from 'react'

const NewTask = ({data}) => {
  console.log(data.category)
   
  return (
    <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-yellow-500 rounded-xl relative'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
                
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className='mt-4 bottom-0 left-1/2 transform -translate-x-1/2 absolute mb-3'>
                <button className=''>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask
