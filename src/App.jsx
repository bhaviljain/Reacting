import React, { useState } from 'react'
import PropsReact from './component/PropsReact'
function App() {
  const data =[
    {name:'John', professtion:"Singer", image: "https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.webp?b=1&s=170667a&w=0&k=20&c=Qm92okavAxSUfDCrPWc5GyFFgwRSHk90x9yP5E4JMdc=",friend:false},

    {name:'Ricky', professtion:"coder", image: "https://media.istockphoto.com/id/1155234248/photo/fitness-instructor-standing-at-a-fitness-centre-and-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=851I3_CDZLhmuLHEJofNBZAT4IiK6Kk9kR--WsM4qEo=",friend:false},

    {name:'Manoj', professtion:"Bhewda", image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww",friend:false},
   
  ]

  const [realdata , setRealdata] = useState(data)

const handleFriendRequest = (changeIndex) =>{
 setRealdata((prev)=>{
  return prev.map((item,index)=>{ //return karna warna array[] yu ka yu padha rehga waha pe.
    if(index === changeIndex) return {...item,
       friend: !item.friend}
  return item;
 })
 })
}

  return (
    <> 
    <div className='w-full bg-zinc-200 flex items-center justify-center'>
      {realdata.map((item,index)=>(
        // <PropsReact imageeee = {item.image} name={item.name} prof={item.professtion}/>
        <PropsReact key={index} handleClick ={handleFriendRequest} index={index} values = {item}/>
      ))}
    </div>
    </>
  )
}

export default App
