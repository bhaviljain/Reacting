import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"

function App() {
const Temp = Array(10).fill(0).map((_,index)=>
  ({id:`item-${index}`, content:`List item ${index + 1}`}))
const [items, setItems] = useState(Temp)
const onDragEnd = (result) =>{
  console.log("onDragEnd",result);
  if(!result.destination) {
    return;
  }
  const updatedList = reorder(items,result.source.index,result.destination.index)
  setItems(updatedList)
}
const reorder = (list, strtIndex, endIndex) =>{
  const result = [...list]
  const [remove] = result.splice(strtIndex,1)
  result.splice(endIndex,0,remove)
  return result
}
return (
  <>
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId='draggable'>
      {
        (provided,snapshot)=>(
          
          <div 
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`list ${snapshot.isDraggingOver ? 'draggingOver':''}`}
          >
                    
            {items.map((item,index)=>(
              <Draggable key={item.id} draggableId={item.id} index={index}>
                
                {
                  
                  (provided,snapshot)=>(
                    
                    <div 
                    className={`item ${snapshot.isDragging ? 'dragging':''}`}
                    style={provided.draggableProps.style}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
   
                      
                      {item.content}
                      <div>
                      <>
                      <h2
className={`${snapshot.isDragging ? "" : "hide"}`}
>Drag {index + 1}</h2>
                   
                      </>
                      </div>
                    </div>
                    
                    
                  )
                }
                
              </Draggable>
            ))}
            {provided.placeholder}
          

          </div>
          
        )
      }
    </Droppable>
  </DragDropContext>
  
  </>
  )
}

export default App
