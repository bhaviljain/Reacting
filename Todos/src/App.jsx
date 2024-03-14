import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [todo, setTodo] = useState('')
const [todos, setTodos] = useState([])
const [editID , seteditID] = useState(0)

const HandleSubmit = (e) =>{
e.preventDefault();


if(editID) {
  const editTodos = todos.find((t)=>t.id === editID);
  const updatedTodo = todos.map((t)=>
  t.id === editTodos.id
  ?(t = {id: t.id , todo})
  :{id: t.id, todo:t.todo}
  ) 
 setTodos(updatedTodo)
 seteditID(0)
 setTodo('')
 return
}



if(todo !== '')
{
  setTodos([{id: `${todo}- ${Date.now()}`, todo},...todos])}
  setTodo('')
}
const handleDelete = (id) =>{

  const dt = todos.filter(item => item.id !== id)
  setTodos(dt)
}

const handleEdit = (id) =>{
  const edit = todos.find(item => item.id === id)
if(edit !== undefined)
{
  setTodo(edit.todo)
  seteditID(id)
}
}

  return (
    <>
  <div className='App'>

    <div className='container'>
      <h1>Todo List</h1>
      <form className='todoForm' onSubmit={HandleSubmit}>
      <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button type='submit'>{editID ? "Edit" :"Go"}</button>

      </form>

      <ul className='allTodos'>
        {todos.map((t)=>(
            <li className='singleTodo'>
            <span className='todoText' key={t.id}>{t.todo}</span>
            <button onClick={()=>handleEdit(t.id)}  id='edit'>Edit</button>
            <button onClick={()=>handleDelete(t.id)} id='delete'>Delete</button>
            </li>
        ))}
      
      </ul>
    </div>
  </div>
    </>
  )
}

export default App
