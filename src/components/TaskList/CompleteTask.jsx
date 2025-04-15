import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-emerald-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>

            <div className=' mt-2 '>
                <button className='w-full'>Complete</button>

            </div>
        </div>
  )
}

export default CompleteTask
