import React, { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {
    const [value, setvalue]= useState(task.task)
    console.log(value);
    const handlechange = (e) =>
        {
       e.preventDefault()
       editTodo(value,task.id)
        }
  return (
    <>
    <div>
    <form onSubmit={handlechange}>
        <input type='text'
         value={value}
         onChange={(e)=>setvalue(e.target.value)}
         placeholder='edit your task'
        />
        <button type='submit'>Add</button>
    </form>
    </div>
    </>
  )
}

export default EditTodoForm