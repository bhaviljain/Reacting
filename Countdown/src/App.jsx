import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inputtimer } from './Inputtimer'
import { ShowTimer } from './showTimer'

function App() {


  const [isStart, setIsStart] = useState(false)
  const [isPause, setIsPause] = useState(false)
  const[hours, setHours] = useState(0)
  const[minutes, setMinutes] = useState(0)
  const[seconds, setSeconds] = useState(0)
  const [timerID, setTimerID] = useState(0)
 
  const handleStart = () => {
    if(hours<  0 || minutes <  0 || seconds <= 0)
      {
        alert("invalid input")
        return
      }
      else{
        setIsStart(true)

      }
     
  }
const handlePause = () =>{
setIsPause(true)
clearInterval(timerID)
}

const handleResume = () =>{
  setIsPause(false)
  runTimer(hours, seconds,minutes)
}

const handleReset = () =>{
  setIsStart(false)
}
 const runTimer = (hr, min, sec, tid) =>{
  if(sec > 0)
    {
      setSeconds((s) =>s - 1)
    }
    else if(sec === 0 && min > 0)
      {
        setMinutes((m)=> m - 1)
        setSeconds(59)
      }
      else {
        setHours((h)=> h - 1)
        setMinutes(59)
        setSeconds(59)
      }
      if(hr === 0 && min === 0 && sec === 0)
        {
          
          setHours(0)
          setMinutes(0)
          setSeconds(0)
          clearInterval(tid)
          alert("timer is finished")
          clearInterval(tid)
          return;
        }
 }

useEffect(()=>{
let tid;
if(isStart){
  tid = setTimeout(() => {
    runTimer(hours, minutes,seconds,tid)
  }, 1000);
  setTimerID(tid)
}
return() =>{
  clearInterval(tid)
}
},

[isStart,hours,seconds,minutes])


  const handleInput = (e) =>{
  console.log(e.target.id ,e.target.value);
  const value = parseInt(e.target.value)
  const id = e.target.id;
  if(id === "hours")
    {
       setHours(value)
    }
    else if(id === "minutes")
      {
        setMinutes(value)
      }
      else{
        setSeconds(value)
      }
  }
  console.log(hours,minutes,seconds);
  return (
    <>
      <div className='App'>

        {!isStart && <Inputtimer
        handleInput = {handleInput}
        handleStart = {handleStart}
        />
        
        }

        {isStart && <ShowTimer 
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        isPause={isPause}
        handlePause={handlePause}
        handleReset= {handleReset}
        handleResume={handleResume}
        />}
      </div>
    </>
  )
}

export default App




{/* <button onClick={() => setCount((counts) => count - 1)}>
count is {counts}
</button> */}