import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Supported_Lang } from './components/constant'
import Data from "./components/celebrities.json"
import Age from './components/Age'

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

function App() {
const [data , setData] = useState([])

useEffect(()=>{
  setData(Data)
},[])
// console.log(data);


  return (
    
    <>

    {data.map((items)=>{
  return (
    <div>{items.first}



 
 <div>{items.description}</div>
 <select
 >
     {Supported_Lang.map(lang=> <option>{lang.name}</option>)}
      </select>
      
       <Age dob={items.dob} data={data} id={items.id}/>
    </div>
  )
    })}
    </>
  )
}

export default App


// getAge(items.dob)
