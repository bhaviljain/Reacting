import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [time , setTime] = useState(null)
 const [now , setNow]= useState(null)

 const inter = useRef(null)
 
 const start = () =>{
  setTime(Date.now())
  setNow(Date.now())
  inter.current = setInterval(() => {
    setTime(Date.now())
  }, 100);
 }

 const stop = () =>{
  clearInterval(inter.current)
 }

 let diff =( time - now) / 1000
  return (
    <>
    <h2>{diff}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

export default App
