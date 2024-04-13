import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Folder } from './Folder'
import { files } from './data'
function App() {

  return (
    <>
      <Folder files= {files} />
    </>
  )
}

export default App
