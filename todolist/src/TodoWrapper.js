import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

const TodoWrapper = () => {
 
     const [todos, setTodos] = useState([])

     const addTodo = (todo) =>{
        setTodos([
            ...todos,{id: Date.now(), task:todo,completed:false,isEdit:false}
        ])
     }
    //  const isCompleted = (id)=>{
    //   setTodos(todos.map((todo)=>todo.id === id ?{
    //     ...todos, completed:!todo.completed}:todo)
    //   )
    //  }
     const editTodo = (id)=>{
     const edit = todos.map((todo)=>todo.id === id ?{...todo, isEdit:!todo.isEdit}:todo)
     setTodos(edit)
     }
     const toggleComplete = (id) => {
        const complete = 
          todos.map((todo)=> todo.id === id ? { ...todo, completed:!todo.completed} : todo)
          setTodos(complete)
      
  }
  const deleteTodo = (id) =>{
  const deleted = todos.filter((val)=>val.id !== id)
  setTodos(deleted)
  }

  const editTask = (task, id) => {
    setTodos(
        todos.map((todo)=> todo.id === id ? {...todo, task, isEdit:!todo.isEdit} : todo)
    )
}

console.log(todos);
  return (
    <div>
             <Todoform addTodo={addTodo}/>

     {todos.map((todo,id)=>
     
       todo.isEdit ? (<EditTodoForm 
        editTodo={editTask}
        task={todo}
       />) : (
        <Todo
        key={todo.id}
        task={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
       )
     )}
       
    </div>
  )
}

export default TodoWrapper