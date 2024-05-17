import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import { Home } from './Home'
import { About } from './About'
import { ThemeProvider } from './Context'
import { Nav } from './Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>  
        <BrowserRouter>
        <Nav />

     <Routes>
      <Route path='/' element={<Home />}>
      <Route path='about' element={<About />} />

        </Route>
     </Routes>
     </BrowserRouter>
     </ThemeProvider>
 
    </>
  )
}

export default App
