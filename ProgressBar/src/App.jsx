import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [progress, setProgress] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

// const handleProgress = () =>{
//   if(progress < 100)
//   {
//     setProgress(progress + 10)
//   }
// }



const handleReset = () =>{
  setProgress(0)
  setIsRunning(false)
}

useEffect(()=>{
  if(progress < 100 && isRunning){
  setTimeout(()=>setProgress(prev => prev +=2),50)
  }
},[progress, isRunning])
  return (
    <>
      <div>
      <div className='progress-container'>
        <div className='progress-bar' style={{width : `${progress}%`}}>
          <div className='progress-label'>
                  {progress}%
          </div>
          <button onClick={()=>setIsRunning(true)} className={`step
    ${!isRunning ? "start" : "stop"}
}`
    }>Start</button>
          <button onClick={handleReset}  className='btn'>Reset</button>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
