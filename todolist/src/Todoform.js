import React, { useState } from 'react'

const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("")
    const  handleSubmit =(e) =>{
        e.preventDefault()
        if(value){
            addTodo(value)
            setValue("")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
             value={value}
             onChange={(e)=>setValue(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
        
    </div>
  )
}

export default Todoform