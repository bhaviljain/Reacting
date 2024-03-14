import { useState } from 'react'
import Todoinput from './components/Todoinput'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState([])
 
 


  const allTodo = (ListItem)=>{
   setTodo([...todo,ListItem])
  }
  
  const deleteTodo=(key)=>{
   let newTodo = [...todo]
   newTodo.splice(key,1)
   setTodo([...newTodo])
  }

 

  return (
    <>
    <Todoinput allTodo={allTodo} />
    {todo &&
    todo.map((items , index)=>{
      
     return <TodoItem key={index} items={items} deleteTodo={deleteTodo} 
     />
    })}
    </>
  )
  }

export default App
