import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dropdown, setdropdown] = useState(false)

  return (
    <>
    <div>
      <img className='pp' src='data:image/jpeg;base64,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
      
      '
      onClick={()=>setdropdown((prev)=>!prev)}
      />
      <div>
        <ul className={`dropdown ${dropdown ? "okay" :"no"}`}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
