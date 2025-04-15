import React from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex gap-5 items-center justify-start py-1 mt-16'>
        {data.tasks.map((elem, idx)=> {

          const allTasks=[]

            
          if (elem.newTask) {
            allTasks.push(<NewTask key={`${idx}-new`} data={elem}/>);
          }
  
          if (elem.active) {
            allTasks.push(<ActiveTask key={`${idx}-active`} data={elem}/>);
          }
  
          if (elem.completed) {
            allTasks.push(<CompleteTask key={`${idx}-completed`} data={elem}/>);
          }
  
          if (elem.failed) {
            allTasks.push(<FailedTask key={`${idx}-failed`} data={elem}/>);
          }
  console.log(elem)
          return (
            <div key={idx}  className="flex gap-5 h-full w-full ">
              {allTasks}
            </div>
          )  

        })}

    </div>
  )
}

export default TaskList
