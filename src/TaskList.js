import React from 'react'
import Task from './Task'
export default function TaskList({task, toggleTask}) {
  return (
    task.map(task => {
      return <Task key={task.id} toggleTask={toggleTask} task={task} />
    })
       
  );
}


