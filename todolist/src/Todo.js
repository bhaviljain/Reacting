import React from 'react'

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
    console.log(task);
  return (
    <div className='Todo'>
    <p className={`${task.completed ? "completed" :"incompleted"}`}
    onClick={()=>toggleComplete(task.id)}
    >{task.task} | </p> 
    <button onClick={()=>editTodo(task.id)}>✒️</button>
    <button onClick={()=>deleteTodo(task.id)}>Del</button>
    </div>
  )
}

export default Todo