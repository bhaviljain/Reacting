import { list } from 'postcss'
import React, { useState } from 'react'

const Todoinput = (props) => {
    const [ListItem , setList] = useState([])
  return (
    <div>
    <input className='bg-zinc-300 ml-[45vw]' type="text" 
         value={ListItem}

     onChange={e=>{setList(e.target.value)}}
    />
    <button
    onClick={()=>{props.allTodo(ListItem)
    setList("")
    }}
    
    >+</button>
   {/* <div>{ListItem}</div> */}
    </div>
  )
}

export default Todoinput