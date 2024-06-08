import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const initialState = [];

  function reducer(state,action){
   switch(action.type){
    case "Add_Task":
      {
    return [
      ...state,
      {
        id:state.length + 1,
        name:action.payload

      }
    ]
  }
  case 'deleteUser': {
    return state.filter(todo => todo.id !== action.id)
  }
  case 'updateUser': {
    return state.map(todo => {
        if(todo.id == action.updatedUser.id)
        	return action.updatedUser
        return todo;
    })
}
case "resetTodo" :{
  return init(action.payload)
}

    default: return state
   }
  }



  const init = (initialState)=>{
    // const res = [...initialState,{id:"1", name:"read"}] sometimes we dont have our initial state so we store it in the 3rd variable of useReducer hook as well, and if we dont pass init 3rd argument then out usereducer wil initialise with the initialstate, and if init is mentioned than the reducer will use init function to get the initial state
  // return res
  return initialState
  }

  const addUser = (e) =>{
   dispatch({
    type:"Add_Task",
    payload:e.target.value
   })
  }
  const deleteuser = (id)=>{
    dispatch({
      type:'deleteUser',
      id:id
    })
  }

  const updatedUser = (updatedUser) =>{
 dispatch({
  type:"updatedUser",
  updatedUser:updatedUser
 })
  }
  const[todos, dispatch] = useReducer(reducer, initialState,init)


  return (
    <>
    <div>{todos.length}</div>
    <input type='text'
    onBlur={addUser}
    />

    <h2/>
   <button
   onClick={()=>dispatch({type:"resetTodo", payload:initialState})}
   >Reset</button>
    {todos.map((todo,id)=>{
      return(
        <span>
        <span>
          {todo.name}
        </span>
        <button onClick={()=>deleteuser(todo.id)}>X</button>
        </span>
        
      )
    })}
    </>
  )
}

export default App
