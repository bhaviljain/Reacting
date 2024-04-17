import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [value, setvalue] = useState(0)
const [history, sethistory] = useState([])
const [redo, setRedo] = useState([])

const handleClick =(key) =>{
console.log(key);
const val = parseInt(key)
setvalue((existingval) => existingval + val)
maintainHistory(key , value , val + value)
}
const maintainHistory = (key,prev,curr) =>{
console.log(key,prev,curr);
const obj = {
  action : key,
  prev,
  curr
}
const copyHistory = [...history] 
  copyHistory.unshift(obj)
  sethistory(copyHistory)
}
const handleUndo = () =>{
  if(history.length)
  {
  const copyHist = [...history]
  const firstItem = copyHist.shift()
  sethistory(copyHist)

  setvalue(firstItem.prev)
  const copyRedolist = [...redo]
  copyRedolist.push(firstItem)
  setRedo(copyRedolist)
  }
}
const handleredo = () =>{
  if(redo.length)
  {
  const copyRedolist =[...redo]
  const poppedVal = copyRedolist.pop()
  setRedo(copyRedolist);
  const {action,prev,curr} = poppedVal;
  setvalue(curr)
  maintainHistory(action,prev,curr)
}
}


  return (
    <>
      <div className='user-actions'>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleredo}>Redo</button>
        <div>
        {["-1","-10","-100"].map((btn)=>{
          return (
            <button onClick={()=>handleClick(btn)}>{btn}</button>
          )
        })
        }
        </div>
        <span className=''>{value}</span>
        <div>
          {["1",'10','100'].map((btn)=>{
            return (
              <button onClick={()=>handleClick(btn)}>{btn}</button>
            )
          })
          }
        </div>

      </div>
      <div className='history'>
        History
        {history.map((item)=>{
          return (
          
            <div>
              <div>{item.action} </div>
              {item.prev} :   {item.curr}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
