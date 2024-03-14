import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
        {props.items}
        <span
        onClick={()=>props.deleteTodo(props.index)}
        >🗑️</span>
        {/* <span onClick={()=>props.editTodo (props.index)}
        className='span'
        >✎</span> */}
        <button>Update</button>


    </div>
  )
}

export default TodoItem