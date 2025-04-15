import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div id='TaskListNumber' className='flex overflow-x-auto mt-10 justify-between  gap-10'>

     <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New task</h3>
      </div>

      <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

      <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber
