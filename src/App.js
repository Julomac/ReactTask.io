import React, { useState, useRef, useEffect } from 'react';
import TaskList from './TaskList';


function App() {
  const [task,setTask] = useState([])
  const taskNameRef = useRef()
  const generatedNumbers = [];
  const LOCAL_STORAGE_KEY = 'taskApp.task'
  
//// this below doesnt work for local storage to be reviewed /////
  useEffect(()=>{
    const storedTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTask) setTask(storedTask)
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(task))
  }, [task])
  //// this above doesnt work for local storage to be reviewed /////

  function toggleTask(id){
    const newTask =  [...task]
    const updateTask = newTask.find(task => task.id === id)
    updateTask.complete = !updateTask.complete
    setTask(newTask)
  }

  function getRandomNumber() {
    let randomNumber;
  
    do {
      randomNumber = Math.floor(Math.random() * 10000) + 1;
    } while (generatedNumbers.includes(randomNumber));
    console.log(randomNumber)
    generatedNumbers.push(randomNumber);
    return randomNumber;
  }

  function handleAddTask(e){
    const name = taskNameRef.current.value
    if (name === '') return  
    setTask( prevTask => {
      return [...prevTask, {id: getRandomNumber(), name: name, complete: false}]
    })
    taskNameRef.current.value =  null
  }

  function handleClearTask(){
    const newTask = task.filter(task => !task.complete )
    setTask(newTask)
  }

  return(
  <div className='card'>
    <h1>Welcome to your task List !</h1>
    <div className='addingLayout'>
      <input className='textInput' placeholder='Enter New Task here' ref={taskNameRef} type='text'></input>
      <button className='addTask' onClick={handleAddTask} >add a task</button>
    </div>
    <div className='taskList'> 
      <TaskList  task={task} toggleTask={toggleTask}/>
    </div>
    <div className='clear'>
      <button  className='clearCompleted' onClick={handleClearTask}>clear all completed task</button>
    </div>
    <div className='text'>
      <p>{task.filter(task => !task.complete).length} tasks left in your list</p> 
    </div>
  </div>
  );
}

export default App;
