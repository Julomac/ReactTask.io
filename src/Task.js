import React from 'react'

export default function Task( {task, toggleTask} ) {
  function handleTaskClick(){
    toggleTask(task.id)
  }
  return (
    <div className='task'>
      
        {task.name}
        <input className='checkBox' type='checkbox' checked={task.complete} onChange={handleTaskClick} />
      
      
    </div>
  )
}
