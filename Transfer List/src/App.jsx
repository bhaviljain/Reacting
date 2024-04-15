import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Data } from './Data'

function App() {
  const [letfItem, setletfItem] = useState(Data)
  const [RightItem, setRightItem] = useState([])

  const checkList = (list , id, checked) =>{
   return list.map((item)=>{
  if(id === item.id)
  {
    return{
      ...item,
      checked : !checked
    }
  }
  return item;
   })
  }


  const handleClick = (id,checked, direction) =>{
    if(direction === "LEFT"){
      let copylist = [...letfItem];
      copylist = checkList(copylist,id,checked)
      setletfItem(copylist)
    }
    else{
      let copylist = [...RightItem];
      copylist = checkList(copylist,id,checked)
      setRightItem(copylist)
    }
  }

 console.log(Data);

const reset = (list) =>{
return list.map((item)=>{
  return{
    ...item,
    checked :false
  }
})
}

 const handleTransferBtn = (dir) =>{
if(dir ==="left-to-right")
{
  const copyList = [...letfItem]
  const checkList = copyList.filter(item => item.checked)
  const uncheckList = copyList.filter(item => !item.checked)
  setRightItem(reset([...RightItem, ...checkList]))
  setletfItem(uncheckList)
}
else{
  const copyList = [...RightItem]
  const checkList = copyList.filter(item => item.checked)
  const uncheckList = copyList.filter(item => !item.checked)
  setletfItem(reset([...letfItem, ...checkList]))
  setRightItem(uncheckList)
}
 }
  return (
    <>
     <div className='container'>
      <div className='box'>
      {letfItem.map(({title ,id , checked})=>{
    return  (
      <div key={id} className={`item ${checked ? "checked" : ""}`}
      onClick={()=>handleClick(id,checked,"LEFT")}
      >
        {title}
      </div>
    )
      })}
      </div>
<div className='actions'>
<button onClick={()=>handleTransferBtn("right-to-left")}>Left</button>
<button onClick={()=>handleTransferBtn("left-to-right")}>Right</button>
</div>
<div className='box'>
{RightItem.map(({title,id,checked})=>{
  return(
    <div className={`item ${checked ? "checked" : ""}`}
    onClick={()=>handleClick(id,checked,"RIGHT")}
    >
 {title}
    </div>
  )
})}
</div>
     </div>
    </>
  )
}

export default App
